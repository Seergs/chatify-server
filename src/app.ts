import express from "express";
import morgan from "morgan";
import cors from "cors";
import http from "http";
import socketio from "socket.io";
import { config } from "dotenv";

config();

import errorMiddleware from "./middlewares/errorMiddlerware";

const app = express();
const server = new http.Server(app);
const io = socketio(server);

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

import messagesRoutes from "./routes/messagesRoutes";
app.use("/messages", messagesRoutes);

import userRoutes from "./routes/userRoutes";
app.use("/users", userRoutes);

app.use(errorMiddleware);

export { app, server, io };
