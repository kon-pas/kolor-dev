export type HexColor = string;

export type GradientHue = HexColor[];

export type GradientId = string;

export type FourDirections = "top" | "right" | "bottom" | "left";

export type EightDirections =
  | "top"
  | "top right"
  | "right"
  | "bottom right"
  | "bottom"
  | "bottom left"
  | "left"
  | "top left";

export type { Gradient as GradientScheme } from "@prisma/client";
