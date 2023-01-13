import { MainColors } from "@enums";

const isArrMainColors = (arr: any[]): arr is MainColors[] => {
  for (const e of arr) if (!(e in MainColors)) return false;
  return true;
};

export default isArrMainColors;
