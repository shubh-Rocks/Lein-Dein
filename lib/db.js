import prisma from "./prisma";

export async function checkDatabaseConnection() {
  try {
    await prisma.$queryRaw`SELECT 1`;
    return true;
  } catch (error) {
    console.error("DATABASE connection failed:", error);
  }
}
