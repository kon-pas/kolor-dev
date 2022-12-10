import { gradients } from "@database";
import { prisma } from "@lib";

const initDatabase = async () => {
  for (const [_, gradient] of Object.entries(gradients)) {
    await prisma.gradient.create({
      data: {
        ...gradient,
      },
    });
  }
};

export default initDatabase;
