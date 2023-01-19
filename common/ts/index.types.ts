export type HexColor = `#${string}`;

export type GradientHue = string[];

export type GradientId = string;

export type FourDirections = "t" | "r" | "b" | "l";

export type EightDirections = "t" | "tr" | "r" | "br" | "b" | "bl" | "l" | "tl";

export type { Gradient as GradientScheme } from "@prisma/client";
