import styles from "./Gradient.module.scss";
import type { GradientHue } from "@types";

interface GradientProps {
  colors: GradientHue
}

const Gradient = ({colors}: GradientProps) => {
  return (
    <div
      className={styles.gradient}
      style={{ backgroundImage: `linear-gradient(to right, ${colors.join(', ')})` }}
    >
    </div>
  )
}

export default Gradient;