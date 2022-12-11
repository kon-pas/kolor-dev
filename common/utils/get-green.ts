import { convert } from "colvertize";

const getGreen = (hex: string): number => convert(hex, "rgb").g;

export default getGreen;
