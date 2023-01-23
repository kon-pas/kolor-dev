export type HexColor = `#${string}`;

export type GradientHue = string[];

export type GradientId = string;

export type LongFourDirection = "to top" | "to right" | "to bottom" | "to left";

export type ShortFourDirection = "t" | "r" | "b" | "l";

export type LongEightDirection =
  | "to top"
  | "to top right"
  | "to right"
  | "to bottom right"
  | "to bottom"
  | "to bottom left"
  | "to left"
  | "to top left";

export type ShortEightDirection =
  | "t"
  | "tr"
  | "r"
  | "br"
  | "b"
  | "bl"
  | "l"
  | "tl";

export type { Gradient as GradientScheme } from "@prisma/client";
