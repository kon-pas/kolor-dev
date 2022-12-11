import type { GradientScheme } from "@types";
import { prisma } from "@lib";

const getGradients = async (): Promise<GradientScheme[]> =>
  prisma.gradient.findMany();

export default getGradients;
