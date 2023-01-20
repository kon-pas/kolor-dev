import styles from "./BackgroundColor.module.scss";

import type { FC, ReactNode } from "react";

import { isHexColor } from "common/utils";

interface BackgroundColorProps {
  hex: string;
  children?: ReactNode;
}

const BackgroundColor: FC<BackgroundColorProps> = ({ hex, children }) => {
  return (
    <div
      className={styles["background-color"]}
      style={{
        backgroundColor: isHexColor(hex) ? hex : `#${hex}`,
      }}
    >
      {children}
    </div>
  );
};

export default BackgroundColor;
