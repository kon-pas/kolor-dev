import { convert } from "colvertize";

import type { HexColor } from "@types";

const getGreen = (hex: HexColor): number => convert(hex, "rgb").g;

export default getGreen;
