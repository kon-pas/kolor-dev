import type { LongFourDirection } from "@types";

// @@@ TODO: Refactor to not repeat the code.
const isLongFourDirection = (dir: string): dir is LongFourDirection =>
  ["to top", "to right", "to bottom", "to left"].includes(dir);

export default isLongFourDirection;
