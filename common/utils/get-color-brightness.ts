import { convert } from "colvertize";

const getColorBrightness = (color: string): number => convert(color, "hsl").l;

export default getColorBrightness;
