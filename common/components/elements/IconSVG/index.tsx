import styles from "./IconSVG.module.scss";

import type { FC, ReactNode } from "react";

interface IconSVGProps {
  children: ReactNode;
  strokeWidth?: number;
  title?: string;
  desc?: string;
  filled?: boolean;
  viewBox?: [number, number];
}

const IconSVG: FC<IconSVGProps> = ({
  children: path,
  strokeWidth,
  title,
  desc,
  filled = false,
  viewBox,
}) => {
  return (
    <svg
      className={styles["icon-svg"]}
      xmlns="http://www.w3.org/2000/svg"
      fill={filled ? "currentColor" : "none"}
      viewBox={viewBox ? `0 0 ${viewBox[0]} ${viewBox[1]}` : "0 0 24 24"}
      strokeWidth={strokeWidth ?? 1.75}
      stroke="currentColor"
      role="img"
      aria-hidden={title ? false : true}
      aria-label={`${title ?? null} ${desc ?? null}`}
      aria-labelledby={`${title ? "titleID" : null} ${desc ? "descID" : null}`}
    >
      {title && <title id={title}>{title}</title>}
      {desc && <desc id={desc}>{desc}</desc>}
      {path}
    </svg>
  );
};

export default IconSVG;
