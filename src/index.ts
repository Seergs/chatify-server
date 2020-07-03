import { Socket } from "socket.io";
import { server, io } from "./app";

const PORT = process.env.PORT || 5000;

io.on("connection", (socket: Socket) => {
  console.log("New user connected");

  socket.on("join", (name: string) => {
    console.log(name);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

server.listen(PORT);
console.log("Server running on http://localhost:5000");
