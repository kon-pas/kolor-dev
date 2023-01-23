import type { ShortEightDirection } from "@types";

// @@@ TODO: Refactor to not repeat the code.
const isShortEightDirection = (dir: string): dir is ShortEightDirection =>
  ["t", "tr", "r", "br", "b", "bl", "l", "tl"].includes(dir);

export default isShortEightDirection;
