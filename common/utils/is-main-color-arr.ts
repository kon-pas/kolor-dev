import { MainColor } from "@enums";

/**
 * Type guard for `MainColor[]`
 */
const isMainColorArr = (arr: any[]): arr is MainColor[] => {
  for (const e of arr) if (!(e in MainColor)) return false;
  return true;
};

export default isMainColorArr;
