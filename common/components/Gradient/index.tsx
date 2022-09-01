import styles from "./Gradient.module.scss";
import type { Gradient as GradientColors} from "@types";

interface GradientProps {
  colors: GradientColors
}

const Gradient = ({colors}: GradientProps) => {
  return (
    <div
      className={styles.gradient}
      // backgroundImage: "linear-gradient(to right, #4880EC, #019CAD)"
      style={{ backgroundImage: `linear-gradient(to right, ${colors.join(', ')})` }}
    >
    </div>
  )
}

export default Gradient;