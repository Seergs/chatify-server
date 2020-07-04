import { Schema, model } from "mongoose";

const messageSchema = new Schema(
  {
    text: { type: String, required: true },
    user: { type: String, required: true },
  },
  { timestamps: true }
);

export default model("Message", messageSchema);
