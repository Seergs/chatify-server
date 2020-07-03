/*

Make sure you have a User model defined

import { Request, Response, NextFunction } from "express";
import { ErrorHandler } from "../helpers/Error";

import { verify, JsonWebTokenError } from "jsonwebtoken";
import config from "../config/config";

import User from "../models/User";
import { User as IUser } from "../types/AuthTypes";

export const authRequired = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = getTokenFromRequest(req);
    if (!token) next(new ErrorHandler(401, "No token in request"));
    else {
      const decodedToken = verify(token, config.JWT_SECRET);
      if (typeof decodedToken === "object") {
        const userFromToken = decodedToken as IUser;
        const user = await User.findOne({ _id: userFromToken.id });
        if (!user) next(new ErrorHandler(404, "Could not find user"));
        else {
          req.user = {
            email: user.email,
            id: user.id,
          };
          next();
        }
      } else {
        next(new ErrorHandler(401, "Invalid token"));
      }
    }
  } catch (e) {
    console.error(e);
    if (e instanceof JsonWebTokenError) next(new ErrorHandler(401, e.message));
  }
};

const getTokenFromRequest = (req: Request): string | null => {
  let token = null;
  const bearerToken = req.headers.authorization;
  if (bearerToken) {
    token = bearerToken.split("Bearer ")[1];
  }

  return token;
};
*/
