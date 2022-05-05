const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const woopa = await prisma.explorer.upsert({
      where: { name: 'Woopa' },
      update: {},
      create: {
        name:'Woopa',
				username: 'ajolonauta',
				mission: 'Node'
      },
    });

    const woopa1 = await prisma.explorer.upsert({
      where: { name: 'Woopa1' },
      update: {},
      create: {
        name: 'Woopa1',
				username: 'ajolonauta1',
				mission: 'Node'
      },
    });

    const woopa2 = await prisma.explorer.upsert({
      where: { name: 'Woopa 2' },
      update: {},
      create: {
        name: 'Woopa 2',
				username: 'ajolonauta2',
				mission: 'Java'
      },
    });

    const woopa3 = await prisma.explorer.upsert({
      where: { name: 'Woopa 3' },
      update: {},
      create: {
        name: 'Woopa 3',
				username: 'ajolonauta3',
				mission: 'Node'
      },
    });

    console.log('Create 3 explorers');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})(); 

(async function main() {
  try {
    const mission1 = await prisma.mission.upsert({
      where: { name: 'Mission 1' },
      update: {},
      create: {
        name: 'Mission 1',
        lang: 'Node',
				missionCommander: 'missionCommander1',
      },
    });

    const mission2 = await prisma.mission.upsert({
      where: { name: 'Mission 2' },
      update: {},
      create: {
        name: 'Mission 2',
        lang: 'Java',
				missionCommander: 'missionCommander1',
      },
    });

    const mission3 = await prisma.mission.upsert({
      where: { name: 'Mission 3' },
      update: {},
      create: {
        name: 'Mission 3',
        lang: 'Node',
				missionCommander: 'missionCommander1',
      },
    });

    console.log('Create 3 explorers');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})(); 