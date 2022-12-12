import { gradients } from "@database";
import { prisma } from "@lib";

const seedDatabase = async () => {
  await prisma.gradient.deleteMany({});

  for (const [_, gradient] of Object.entries(gradients)) {
    await prisma.gradient.create({
      data: {
        ...gradient,
      },
    });
  }
};

export default seedDatabase;
