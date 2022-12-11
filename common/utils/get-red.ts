import { convert } from "colvertize";

const getRed = (hex: string): number => convert(hex, "rgb").r;

export default getRed;
