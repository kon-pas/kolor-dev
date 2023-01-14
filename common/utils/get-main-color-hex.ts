import type { MainColor } from "@enums";
import { MAIN_COLORS_VALUES } from "@constants";

// @@@ NOTE: THis is an overkill.

/**
 * @param colorName Name of the color in plain english.
 * @returns The given color's hex code.
 */
const getMainColorHex = (colorName: MainColor): string => {
  if (colorName in MAIN_COLORS_VALUES) return MAIN_COLORS_VALUES[colorName];
  else {
    console.error("Main color not found!");
    return Object.values(MAIN_COLORS_VALUES)[0];
  }
};

export default getMainColorHex;
