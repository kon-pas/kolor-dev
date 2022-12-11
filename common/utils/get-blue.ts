import { convert } from "colvertize";

const getBlue = (hex: string): number => convert(hex, "rgb").b;

export default getBlue;
