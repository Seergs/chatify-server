import { Request, Response, NextFunction } from "express";
import { handleError, ErrorHandler } from "../helpers/Error";

export default (
  err: ErrorHandler,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  handleError(err, res);
};
