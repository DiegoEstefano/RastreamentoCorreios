import warnings from "../constants/warnings";
import getActualState from "./getActualState";
import prisma from "./prismaClient";

const createPackage = async (userId: number, code: string) => {
  const lastState = await getActualState(code);
  try {
    await prisma.packages.create({
      data: {
        User: {
          connect: { id: userId },
        },
        code,
        lastState,
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
    if (!packages.length) throw new Error(warnings.packagesNotFound);
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
