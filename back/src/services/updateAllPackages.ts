import { Packages } from '@prisma/client';
import Amqp from './message/Amqp';
import prisma from './prismaClient';

export const updateAllPackages = async () => {
  await Amqp.boot();
  const packages = await prisma.packages.findMany();
  packages.forEach((pack: Packages) => {
    Amqp.publishMessage('toUpdate', pack);
  });
};
