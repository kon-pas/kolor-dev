import styles from "./Button.module.scss";

import type { FC, ReactNode } from "react";

interface ButtonProps {
  onClick?: () => void;
  label?: string;
  children?: ReactNode;
  iconSide?: "left" | "right";
}

const Button: FC<ButtonProps> = ({
  onClick,
  label,
  children,
  iconSide = "left",
}) => {
  return (
    <button className={styles["button"]} onClick={onClick}>
      {iconSide === "left" && (
        <span className={styles["button__icon"]}>{children}</span>
      )}

      {label && <span className={styles["button__label"]}>{label}</span>}

      {iconSide === "right" && (
        <span className={styles["button__icon"]}>{children}</span>
      )}
    </button>
  );
};

export default Button;
