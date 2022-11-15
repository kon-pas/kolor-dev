import styles from "./CodeSnippet.module.scss";

interface CodeSnippetProps {
  children: React.ReactNode;
  title?: string;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ children, title }) => {
  return (
    <div className={styles["code-snippet"]}>
      <p className={styles["code-snippet__title"]}>{title}</p>

      <div className={styles["code-snippet__code"]}>{children}</div>
    </div>
  );
};

export default CodeSnippet;
