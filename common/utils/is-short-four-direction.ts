import type { LongFourDirection } from "@types";

// @@@ TODO: Refactor to not repeat the code.
const isLongFourDirection = (dir: string): dir is LongFourDirection =>
  ["t", "r", "b", "l"].includes(dir);

export default isLongFourDirection;
