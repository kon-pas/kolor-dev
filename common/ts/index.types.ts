export type HexColor = `#${string}`;

export type GradientHue = string[];

export type GradientId = string;

export type FourDirections = "to top" | "to right" | "to bottom" | "to left";

export type EightDirections =
  | "to top"
  | "to top right"
  | "to right"
  | "to bottom right"
  | "to bottom"
  | "to bottom left"
  | "to left"
  | "to top left";

export type { Gradient as GradientScheme } from "@prisma/client";
