import type { FourDirections } from "@types";

// @@@ TODO: Refactor to not repeat the code.
const isFourDirections = (dir: string): dir is FourDirections =>
  ["to top", "to right", "to bottom", "to left"].includes(dir);

export default isFourDirections;
