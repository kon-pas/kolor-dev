import styles from "./BackgroundGradient.module.scss";

import type { FC } from "react";
import type { GradientHue, EightDirections } from "@types";

interface BackgroundGradientProps {
  colors: GradientHue;
  direction?: EightDirections;
}

const BackgroundGradient: FC<BackgroundGradientProps> = props => {
  return (
    <div
      className={styles["background-gradient"]}
      style={{
        backgroundImage: `linear-gradient(${
          props.direction ?? "to right"
        }, ${props.colors.join(", ")})`,
      }}
    ></div>
  );
};

export default BackgroundGradient;
