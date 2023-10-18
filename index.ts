import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    //* Prisma Queries Here
}

main()
.then(async () => {
    await prisma.$disconnect();
})
.catch(async (e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
})