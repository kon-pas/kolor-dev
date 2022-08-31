import styles from "./Gradient.module.scss";

interface GradientProps {
  colors: [string, string] | [string, string, string]
}

const Gradient = ({colors}: GradientProps) => {
  return (
    <div
      className={styles.gradient}
      style={{ backgroundImage: `linear-gradient(to right, ${colors.join(' ')})` }}
    >
    </div>
  )
}

export default Gradient;