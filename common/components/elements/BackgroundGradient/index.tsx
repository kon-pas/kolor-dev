import styles from "./BackgroundGradient.module.scss";

import type { FC } from "react";
import type { GradientHue, LongEightDirection } from "@types";

interface BackgroundGradientProps {
  colors: GradientHue;
  direction?: LongEightDirection;
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
