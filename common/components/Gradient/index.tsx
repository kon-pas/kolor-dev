import styles from "./Gradient.module.scss";

interface GradientProps {
  colors: [string, string] | [string, string, string]
}

const Gradient = ({colors}: GradientProps) => {
  return (
    <div
      className={styles.gradient}
      style={{ backgroundImage: `linear-gradient(to right, ${colors[0]}, ${colors[1]})` }}
    >
    </div>
  )
}

export default Gradient;