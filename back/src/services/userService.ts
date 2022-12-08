import warnings from "../constants/warnings";
import bcrypt from "bcrypt";
import prisma from "./prismaClient";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../../utils/env";

const createUser = async (phoneNumber: string, email: string) => {
  const hashMail = bcrypt.hashSync(email, 10);
  try {
    await prisma.users.create({
      data: {
        phoneNumber,
        email: hashMail,
      },
    });
    return { status: 201, message: warnings.userCreated };
  } catch (error) {
    return {
      status: 400,
      message: warnings.errorOnCreateUser,
      error,
    };
  }
};

const logIn = async (phoneNumber: string, email: string) => {
  const user = await prisma.users.findUniqueOrThrow({
    where: {
      phoneNumber,
    },
  });

  const unhashMail = bcrypt.compareSync(email, user.email);

  if (unhashMail) {
    const token = jwt.sign({ userId: user.id }, JWT_SECRET!);
    return { status: 200, message: warnings.welcome, token };
  }

  return { status: 401, message: warnings.unauthorized };
};

export { createUser, logIn };
