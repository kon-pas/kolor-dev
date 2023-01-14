import { MainColor } from "@enums";

const isMainColor = (el: any): el is MainColor => el in MainColor;

export default isMainColor;
