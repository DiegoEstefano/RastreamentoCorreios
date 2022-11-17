import { Request, Response } from "express";
import { createUser, logIn } from "../services/userService";

const register = async (req: Request, res: Response) => {
  const { phoneNumber, email } = req.body;
  const result = await createUser(phoneNumber, email);
  return res.status(result.status).json(result);
};

const login = async (req: Request, res: Response) => {
  const { phoneNumber, email } = req.body;
  const result = await logIn(phoneNumber, email);
  return res.status(result.status).json(result)
};

export { register, login };
