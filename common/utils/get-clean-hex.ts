import type { HexColor } from "@types";

import { isHexColor } from "@utils";

const getCleanHex = (hex: HexColor | string): string =>
  isHexColor(hex) ? (hex[0] === "#" ? hex.slice(1) : hex).toUpperCase() : hex;

export default getCleanHex;
