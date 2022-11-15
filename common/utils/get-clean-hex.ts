import { HexColor } from "@types";

const getCleanHex = (hex: HexColor): string => hex.slice(1).toUpperCase();

export default getCleanHex;