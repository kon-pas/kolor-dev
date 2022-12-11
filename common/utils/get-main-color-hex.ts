import type { MainColors } from "@enums";
import { MAIN_COLORS } from "@constants";

const getMainColorHex = (colorName: MainColors): string =>
  MAIN_COLORS[colorName];

export default getMainColorHex;
