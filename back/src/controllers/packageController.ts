import { Request, Response } from "express";
import { createPackage, getPackages } from "../services/packageService";

const getAllPackages = async (req: Request, res: Response) => {
  const { userId } = req.headers;
  const result = await getPackages(Number(userId));
  return res.status(result.status).json(result);
};

const create = async (req: Request, res: Response) => {
  const { code } = req.body;
  const { userId } = req.headers;
  const result = await createPackage(Number(userId), code);
  return res.status(result.status).json(result);
};

const edit = (req: Request, res: Response) => {};
const delet = (req: Request, res: Response) => {};

export { getAllPackages, create, edit, delet };
