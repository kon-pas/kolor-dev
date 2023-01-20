import { getColorBrightness } from "@utils";

import type { FC, ReactNode } from "react";

interface SpanMonochromeProps {
  color: string;
  children: ReactNode;
  breakpoint?: number;
}

/**
 * Returns text either white or black based on provided color's lightness.
 */
const SpanMonochrome: FC<SpanMonochromeProps> = props => {
  return getColorBrightness(props.color) > (props.breakpoint ?? 0.475) ? (
    <span>{props.children}</span>
  ) : (
    <span style={{ color: "white" }}>{props.children}</span>
  );
};

export default SpanMonochrome;
