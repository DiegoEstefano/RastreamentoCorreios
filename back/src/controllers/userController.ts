import { Request, Response } from 'express';
import { createUser } from '../services/userService';

const register = async (req: Request, res: Response) => {
  const { phoneNumber, email } = req.body;
  const result = await createUser(phoneNumber, email);
  return res.status(result.status).json(result);
};

const login = (req: Request, res: Response) => {
  return res.send('logado!');
};

export { register, login };
