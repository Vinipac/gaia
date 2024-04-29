import { PrismaClient } from '@prisma/client';

// eslint-disable-next-line import/no-mutable-exports
const prisma: PrismaClient = new PrismaClient();

export default prisma;
