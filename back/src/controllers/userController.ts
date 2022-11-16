import { Request, Response } from 'express';
import { createUser } from '../services/userService';

const register = async (req: Request, res: Response) => {
  const { phoneNumber, email } = req.body;
  const { status, message, error } = await createUser(phoneNumber, email);
  return res.status(status).json({ status, message, error });
};

const login = (req: Request, res: Response) => {
  return res.send('logado!');
};

export { register, login };
