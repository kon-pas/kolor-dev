import { MainColor } from "@enums";

/**
 * Type guard for `MainColor`
 */
const isMainColor = (element: any): element is MainColor =>
  element in MainColor;

export default isMainColor;
