import type { MainColors } from "@enums";
import { MAIN_COLORS_VALUES } from "@constants";

const getMainColorHex = (colorName: MainColors): string =>
  MAIN_COLORS_VALUES[colorName];

export default getMainColorHex;
