import styles from "./Color.module.scss";

interface ColorProps {
  hex: string;
  children?: React.ReactNode;
}

const Color: React.FC<ColorProps> = ({ hex, children }) => {
  return (
    <div className={styles.color} style={{ backgroundColor: hex }}>
      {children}
    </div>
  );
};

export default Color;
