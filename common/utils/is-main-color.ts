import { MainColors } from "@enums";

const isMainColor = (el: any): el is MainColors => el in MainColors;

export default isMainColor;
