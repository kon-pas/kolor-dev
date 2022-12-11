import type { GradientScheme } from "@types";
import { prisma } from "@lib";

const getGradient = async (id: string): Promise<GradientScheme | null> =>
  prisma.gradient.findUnique({
    where: {
      id,
    },
  });

export default getGradient;
