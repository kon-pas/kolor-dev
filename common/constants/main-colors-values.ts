import type { MainColor } from "@enums";
import type { HexColor } from "@types";

const MAIN_COLORS: { [key in MainColor]: HexColor } = {
  Blue: "#51A9FF",
  Cyan: "#03CEAC",
  Green: "#97DE40",
  Yellow: "#FFC933",
  Orange: "#FB943D",
  Red: "#F05050",
  Purple: "#B898E5",
  Pink: "#FF8AF0",
  White: "#FFFFFF",
  Gray: "#A9B4BF",
  Black: "#000000",
  Brown: "#513927",
};

export default MAIN_COLORS;
