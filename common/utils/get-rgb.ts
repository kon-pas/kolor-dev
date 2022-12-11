import { getRed, getGreen, getBlue } from "@utils";

const getRGB = (hex: string): string =>
  `rgb(${getRed(hex)}, ${getGreen(hex)}, ${getBlue(hex)})`;

export default getRGB;
