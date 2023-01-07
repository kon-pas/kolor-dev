import type { MainColors } from "@enums";
import { MAIN_COLORS_VALUES } from "@constants";

// @@@ NOTE: THis is an overkill.

/**
 * @param colorName Name of the color in plain english.
 * @returns The given color's hex code.
 */
const getMainColorHex = (colorName: MainColors): string =>
  MAIN_COLORS_VALUES[colorName];

export default getMainColorHex;
