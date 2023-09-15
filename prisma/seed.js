const { PrismaClient } = require('@prisma/client');
const { seedJobs } = require('./seed/seedJobs');

const prisma = new PrismaClient()


async function main() {

  const seed = await prisma.jobs.createMany({
    data: seedJobs,
    skipDuplicates: true,
  })
  
  console.log(seed);

}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })