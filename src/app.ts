import express from "express";
import morgan from "morgan";
import cors from "cors";
import http from "http";
import socketio from "socket.io";
import { config } from "dotenv";

if (process.env.NODE_ENV === "development") {
  config();
}

import errorMiddleware from "./middlewares/errorMiddlerware";

const app = express();
const server = new http.Server(app);
const io = socketio(server);

app.use(cors());
app.use(morgan("dev"));

import productRouter from "./routes/productRoutes";
app.use("/products", productRouter);

app.use(errorMiddleware);

export { app, server, io };
