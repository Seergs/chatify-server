import { connect } from "mongoose";
import config from "./config/config";

export async function connectToMongo() {
  await connect(config.DB, { useNewUrlParser: true, useUnifiedTopology: true });

  console.log("Connected to Mongo");
}
