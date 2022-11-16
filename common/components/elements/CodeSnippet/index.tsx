import styles from "./CodeSnippet.module.scss";

interface CodeSnippetProps {
  children: React.ReactNode;
  title?: string;
  onClick?: () => void;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({
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
