import type {
  LongFourDirection,
  LongEightDirection,
  ShortFourDirection,
  ShortEightDirection,
} from "@types";

import { isLongEightDirection, isLongFourDirection } from "@utils";

const getShortDirection = (
  dir:
    | LongFourDirection
    | LongEightDirection
    | ShortFourDirection
    | ShortEightDirection
): ShortFourDirection | ShortEightDirection => {
  if (isLongEightDirection(dir) || isLongFourDirection(dir))
    switch (dir) {
      case "to top":
        return "t";
      case "to top right":
        return "tr";
      case "to right":
        return "r";
      case "to bottom right":
        return "br";
      case "to bottom":
        return "b";
      case "to bottom left":
        return "bl";
      case "to left":
        return "l";
      case "to top left":
        return "tl";
    }
  return dir;
};

export default getShortDirection;
