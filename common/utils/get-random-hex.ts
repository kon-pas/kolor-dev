import type { HexColor } from "@types";

const getRandomHex = (): HexColor =>
  "#000000".replace(/0/g, () =>
    (~~(Math.random() * 16)).toString(16)
  ) as HexColor;

export default getRandomHex;
