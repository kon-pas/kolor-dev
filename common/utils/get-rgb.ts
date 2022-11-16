import type { HexColor } from "@types";

import { getRed, getGreen, getBlue } from "@utils";

const getRGB = (hex: HexColor): string =>
  `rgb(${getRed(hex)}, ${getGreen(hex)}, ${getBlue(hex)})`;

export default getRGB;
