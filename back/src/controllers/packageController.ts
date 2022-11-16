import { Request, Response } from 'express';
import { createPackage } from '../services/packageService';

const getAllPackages = (req: Request, res: Response) => {};

const create = async (req: Request, res: Response) => {
  const { userId, code } = req.body;
  const { status, message, error } = await createPackage(userId, code);
  return res.status(status).json({ status, message, error });
};

const edit = (req: Request, res: Response) => {};
const delet = (req: Request, res: Response) => {};

export { getAllPackages, create, edit, delet };
