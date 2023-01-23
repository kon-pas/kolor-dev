import styles from "./TextGradiented.module.scss";

import type { FC } from "react";
import type { GradientHue, LongEightDirection } from "@types";

interface TextGradientedProps {
  colors: GradientHue;
  children: string;
  direction?: LongEightDirection;
}

const TextGradiented: FC<TextGradientedProps> = ({
  children: text,
  colors,
  direction,
}) => {
  return (
    <span
      className={styles["text-gradiented"]}
      style={{
        backgroundImage: `linear-gradient(${
          direction ?? " to right"
        }, ${colors.join(", ")})`,
      }}
    >
      {text}
    </span>
  );
};

export default TextGradiented;
