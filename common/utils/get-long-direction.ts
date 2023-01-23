import type {
  LongFourDirection,
  LongEightDirection,
  ShortFourDirection,
  ShortEightDirection,
} from "@types";

import { isShortEightDirection, isShortFourDirection } from "@utils";

const getLongDirection = (
  dir:
    | LongFourDirection
    | LongEightDirection
    | ShortFourDirection
    | ShortEightDirection
): LongFourDirection | LongEightDirection => {
  if (isShortEightDirection(dir) || isShortFourDirection(dir))
    switch (dir) {
      case "t":
        return "to top";
      case "tr":
        return "to top right";
      case "r":
        return "to right";
      case "br":
        return "to bottom right";
      case "b":
        return "to bottom";
      case "bl":
        return "to bottom left";
      case "l":
        return "to left";
      case "tl":
        return "to top left";
    }
  return dir;
};

export default getLongDirection;
