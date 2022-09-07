import { HexColor } from "@types";

const getCleanHex: { (hex: HexColor ): string } = hex => hex.slice(1).toUpperCase();

export default getCleanHex;