import type { LongEightDirection } from "@types";

// @@@ TODO: Refactor to not repeat the code.
const isLongEightDirection = (dir: string): dir is LongEightDirection =>
  ["t", "tr", "r", "br", "b", "bl", "l", "tl"].includes(dir);

export default isLongEightDirection;
