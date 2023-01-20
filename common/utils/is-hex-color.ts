import { HexColor } from "@types";

const isHexColor = (str: string | null | undefined): str is HexColor =>
  str ? str[0] === "#" && str.length === 7 : false;

export default isHexColor;
