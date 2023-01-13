import { MiscTags } from "@enums";

const isArrMiscTags = (arr: any[]): arr is MiscTags[] => {
  for (const e of arr) if (!(e in MiscTags)) return false;
  return true;
};

export default isArrMiscTags;
