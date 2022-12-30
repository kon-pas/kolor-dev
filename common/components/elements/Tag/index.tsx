import styles from "./Tag.module.scss";

import type { FC, ReactNode } from "react";

import { MainColors } from "@enums";
import { getMainColorHex } from "@utils";

interface TagProps {
  children?: ReactNode;
  type?: "hash" | "color";
  color?: MainColors;
  onClick?: () => void;
}

const Tag: FC<TagProps> = ({ children, type, color, onClick }) => {
  return (
    <div className={styles.tag} onClick={onClick}>
      {type === "hash" && (
        <span>
          <span className={styles["tag__hash-symbol"]}>#</span>
          {children}
        </span>
      )}

      {type === "color" && color && (
        <span>
          <span
            className={styles["tag__color-symbol"]}
            style={{ color: getMainColorHex(color) }}
          >
            ■
          </span>
          {
            Object.keys(MainColors)[
              Object.values(MainColors).indexOf(color as unknown as MainColors)
            ]
          }
        </span>
      )}
    </div>
  );
};

export default Tag;
