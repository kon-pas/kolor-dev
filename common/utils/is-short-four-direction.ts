import type { ShortFourDirection } from "@types";

// @@@ TODO: Refactor to not repeat the code.
const isShortFourDirection = (dir: string): dir is ShortFourDirection =>
  ["t", "r", "b", "l"].includes(dir);

export default isShortFourDirection;
