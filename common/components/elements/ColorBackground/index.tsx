import styles from "./Color.module.scss";

import type { FC, ReactNode } from "react";

interface ColorProps {
  hex: string;
  children?: ReactNode;
}

const Color: FC<ColorProps> = ({ hex, children }) => {
  return (
    <div className={styles.color} style={{ backgroundColor: hex }}>
      {children}
    </div>
  );
};

export default Color;
