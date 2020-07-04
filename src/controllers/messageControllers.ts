import { Request, Response } from "express";
import Message from "../models/Message";

export const addNewMessage = async ({
  text,
  user,
}: {
  text: string;
  user: string;
}) => {
  const newMessage = new Message({ text, user });
  await newMessage.save();
};

export const getAllMessages = async (req: Request, res: Response) => {
  return res.json(await Message.find());
};
