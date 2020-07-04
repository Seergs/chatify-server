import { Socket } from "socket.io";
import { server, io } from "./app";
import { addUser, getUser, removeUser } from "./controllers/userControllers";
import { addNewMessage } from "./controllers/messageControllers";
import { connectToMongo } from "./dbConfig";

const PORT = process.env.PORT || 5000;

io.on("connection", (socket: Socket) => {
  socket.on("join", ({ name }, callback: Function) => {
    const { error, user } = addUser({ id: socket.id, name });

    if (error) {
      return callback(error);
    }
    if (user) {
      socket.emit("message", {
        user: "admin",
        text: `Hello ${user.name}, welcome to Chatify`,
      });

      socket.broadcast.to("general").emit("message", {
        user: "admin",
        text: `${user.name} has joined the chat`,
      });

      //General is the chat room
      socket.join("general");

      callback();
    }
  });

  socket.on("sendMessage", async (message: string, callback) => {
    const user = getUser(socket.id);

    if (user) {
      io.to("general").emit("message", { user: user.name, text: message });
      await addNewMessage({ text: message, user: user.name });
    }

    callback();
  });

  socket.on("disconnect", () => {
    const user = removeUser(socket.id);

    if (user) {
      io.to("general").emit("message", {
        user: "admin",
        text: `${user.name} has left the chat, see you soon`,
      });
    }
  });
});

(async () => {
  await connectToMongo();
  server.listen(PORT);
  console.log("Server running on http://localhost:5000");
})();
