import styles from "./Tag.module.scss";

import { MainColors } from "@enums";
import { getMainColorHex } from "@utils";
import SpanMonochrome from "@components/elements/SpanMonochrome";

interface TagProps {
  children?: React.ReactNode;
  type?: "hash" | "color";
  color?: MainColors;
  onClick?: () => void;
}

const Tag: React.FC<TagProps> = ({ children, type, color, onClick }) => {
  return (
    <div
      className={styles.tag}
      onClick={onClick}
      style={{
        ...(type === "color" &&
          color && { backgroundColor: `${getMainColorHex(color)}` }),
      }}
    >
      {type === "hash" && (
        <span>
          <span className={styles["tag__hash-symbol"]}>#</span>
          {children}
        </span>
      )}

      {type === "color" && color && (
        <SpanMonochrome color={getMainColorHex(color)} breakpoint={0.5}>
          {
            Object.keys(MainColors)[
              Object.values(MainColors).indexOf(color as unknown as MainColors)
            ]
          }
        </SpanMonochrome>
      )}
    </div>
  );
};

export default Tag;
