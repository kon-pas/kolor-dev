import { convert } from "colvertize";

import type { HexColor } from "@types";

const getBlue = (hex: HexColor): number => convert(hex, "rgb").b;

export default getBlue;
