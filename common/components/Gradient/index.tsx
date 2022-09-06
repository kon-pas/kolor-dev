import styles from "./Gradient.module.scss";
import type { GradientHue } from "@types";

interface GradientProps {
  colors: GradientHue
}

const Gradient: React.FC<GradientProps> = ({colors}) => {
  return (
    <div
      className={styles.gradient}
      style={{ backgroundImage: `linear-gradient(to right, ${colors.join(', ')})` }}
    >
    </div>
  )
}

export default Gradient;