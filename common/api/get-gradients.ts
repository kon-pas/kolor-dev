import type { GradientScheme } from "@types";
import { prisma } from "@lib";

const getGradients = async (): Promise<GradientScheme[]> => {
  try {
    return await prisma.gradient.findMany();
  } catch (err) {
    console.error("Unable to find gradients", err);
    return [];
  }
};

export default getGradients;
