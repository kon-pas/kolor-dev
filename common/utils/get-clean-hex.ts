import { HexColor } from "@types";

const getCleanHex = (hex: HexColor): string =>
  (hex[0] === "#" ? hex.slice(1) : hex).toUpperCase();

export default getCleanHex;
