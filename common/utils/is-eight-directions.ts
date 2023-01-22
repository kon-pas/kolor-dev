import type { EightDirections } from "@types";

const isEightDirections = (dir: string): dir is EightDirections =>
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

export default isEightDirections;
