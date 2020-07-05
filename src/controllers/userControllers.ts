import { NextFunction, Request, Response } from "express";
import { ErrorHandler } from "../helpers/Error";

type User = {
  id: string;
  name: string;
};

const users: User[] = [];

export const addUser = ({ id, name }: { id: string; name: string }) => {
  const user = { id, name };

  users.push(user);

  return user;
};

export const removeUser = (id: string) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

export const getUser = (id: string) => users.find((user) => user.id === id);

export const getUsers = () => {
  return users.map((user) => user.name);
};

export const validateUsername = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (users.find((user) => user.name === req.body.name)) {
    next(new ErrorHandler(400, "Username is already taken"));
  } else return res.sendStatus(200);
};
