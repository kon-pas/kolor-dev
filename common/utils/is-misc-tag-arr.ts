import { MiscTag } from "@enums";

const isMiscTagArr = (arr: any[]): arr is MiscTag[] => {
  for (const e of arr) if (!(e in MiscTag)) return false;
  return true;
};

export default isMiscTagArr;
