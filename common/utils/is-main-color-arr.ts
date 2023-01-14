import { MainColor } from "@enums";

const isMainColorArr = (arr: any[]): arr is MainColor[] => {
  for (const e of arr) if (!(e in MainColor)) return false;
  return true;
};

export default isMainColorArr;
