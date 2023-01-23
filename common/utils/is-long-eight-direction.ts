import type { LongEightDirection } from "@types";

// @@@ TODO: Refactor to not repeat the code.
const isLongEightDirection = (dir: string): dir is LongEightDirection =>
  [
    "to top",
    "to top right",
    "to right",
    "to bottom right",
    "to bottom",
    "to bottom left",
    "to left",
    "to top left",
  ].includes(dir);

export default isLongEightDirection;
