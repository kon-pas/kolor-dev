import { MiscTag } from "@enums";

/**
 * Type guard for `MiscTag[]`
 */
const isMiscTagArr = (arr: any[]): arr is MiscTag[] => {
  for (const element of arr) if (!(element in MiscTag)) return false;
  return true;
};

export default isMiscTagArr;
