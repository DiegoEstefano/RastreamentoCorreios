import warnings from '../constants/warnings';
import prisma from './prismaClient';

const createUser = async (phoneNumber: string, email: string) => {
  try {
    const user = await prisma.users.create({
      data: {
        phoneNumber,
        email,
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

export { createUser };
