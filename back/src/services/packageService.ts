import warnings from '../constants/warnings';
import prisma from './prismaClient';

const createPackage = async (userId: number, code: string) => {
  try {
    const newPackage = await prisma.packages.create({
      data: {
        User: {
          connect: { id: userId },
        },
        code,
      },
    });
    return { status: 201, message: warnings.packageCreated, error: null };
  } catch (error) {
    return { status: 400, message: warnings.errorOnCreatePackage, error };
  }
};

export { createPackage };
