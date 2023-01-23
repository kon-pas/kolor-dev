// NOTE: Parent component has to be `display: relative`.

import styles from "./TextUnderline.module.scss";

import type { FC } from "react";
import type { GradientHue, LongEightDirection } from "@types";

interface TextUnderlineProps {
  children?: string;
  thickness?: number;
  offset?: number;
  opacity?: number;
  colors?: GradientHue;
  to?: LongEightDirection;
}

const TextUnderline: FC<TextUnderlineProps> = ({
  children,
  thickness = 10,
  offset = 0,
  opacity = 0.75,
  colors,
  to: direction,
}) => {
  return (
    <>
      {children && <span>{children}</span>}
      <div
        className={styles["text-underline"]}
        style={{
          height: `${thickness}px`,
          bottom: `${offset * -1}px`,
          opacity: `${opacity}`,
          ...(colors && {
            backgroundImage: `linear-gradient(to ${
              direction ?? "right"
            }, ${colors.join(", ")})`,
          }),
        }}
      ></div>
    </>
  );
};

export default TextUnderline;
