import styles from "./TextGradiented.module.scss";

import type { FC } from "react";
import type { GradientHue, EightDirections } from "@types";

interface TextGradientedProps {
  colors: GradientHue;
  children: string;
  to?: EightDirections;
}

const TextGradiented: FC<TextGradientedProps> = ({
  children: text,
  colors,
  to: direction,
}) => {
  return (
    <span
      className={styles["text-gradiented"]}
      style={{
        backgroundImage: `linear-gradient(to ${
          direction ?? "right"
        }, ${colors.join(", ")})`,
      }}
    >
      {text}
    </span>
  );
};

export default TextGradiented;
