import express from "express";
import morgan from "morgan";
import cors from "cors";
import { config } from "dotenv";

if (process.env.NODE_ENV === "development") {
  config();
}

import errorMiddleware from "./middlewares/errorMiddlerware";

const app = express();

app.use(cors());
app.use(morgan("dev"));

import productRouter from "./routes/productRoutes";
app.use("/products", productRouter);

app.use(errorMiddleware);

export default app;
