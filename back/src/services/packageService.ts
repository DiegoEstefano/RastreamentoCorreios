import warnings from '../constants/warnings';
import prisma from './prismaClient';

const createPackage = async (userId: number, code: string) => {
  try {
    await prisma.packages.create({
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

const getPackages = async (userId: number) => {
  try {
    const packages = await prisma.packages.findMany({
      where: {
        userId,
      },
    });
    return {
      status: 200,
      message: warnings.returnPackages,
      data: packages,
    };
  } catch (error) {
    return { status: 401, message: warnings.packagesNotFound, error };
  }
};

export { createPackage, getPackages };
