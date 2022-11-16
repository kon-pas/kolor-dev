import { convert } from "colvertize";

import type { HexColor } from "@types";

const getRed = (hex: HexColor): number => convert(hex, "rgb").r;

export default getRed;
