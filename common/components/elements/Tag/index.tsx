import styles from "./Tag.module.scss";

import type { FC, ReactNode } from "react";

import clsx from "clsx";
import { MainColors } from "@enums";
import { getMainColorHex } from "@utils";

interface TagProps {
  children?: ReactNode;
  type?: "hash" | "color";
  color?: MainColors;
  onClick?: () => void;
  active?: boolean;
}

const Tag: FC<TagProps> = ({ children, type, color, onClick, active }) => {
  return (
    <div
      className={clsx(styles["tag"], active && styles["tag--active"])}
      onClick={onClick}
    >
      {type === "hash" && (
        <span>
          <span
            className={clsx(
              styles["tag__hash-symbol"],
              active && styles["tag__hash-symbol--active"]
            )}
          >
            #
          </span>
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

      {!type && (
        <span>
          {children}
        </span>
      )}
    </div>
  );
};

export default Tag;
