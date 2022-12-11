import styles from "./CodeSnippet.module.scss";

import type { FC, ReactNode } from "react";

interface CodeSnippetProps {
  children: ReactNode;
  title?: string;
  onClick?: () => void;
}

const CodeSnippet: FC<CodeSnippetProps> = ({
  children,
  title,
  onClick,
}) => {
  return (
    <div
      className={styles["code-snippet"]}
      onClick={() => onClick && onClick()}
    >
      <div className={styles["code-snippet__code"]}>{children}</div>
      <p className={styles["code-snippet__title"]}>{title}</p>
    </div>
  );
};

export default CodeSnippet;
