import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { JWT_SECRET } from "../../utils/env";
import warnings from "../constants/warnings";

const login = (req: Request, res: Response, next: NextFunction) => {
  try {
    const [, token] = req.headers.authorization!.split("Bearer ");
    const { userId } = jwt.verify(token, JWT_SECRET!) as JwtPayload;
    req.headers.userId = userId;
    next();
  } catch (error) {
    return res.status(401).json({ message: warnings.unauthorized });
  }
};

export default login;
