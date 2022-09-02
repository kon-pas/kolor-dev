import styles from './Color.module.scss'

interface ColorProps {
  hex: string,
  children?: string
}

const Color = ({ hex, children }: ColorProps) => {
  return (
    <div
      className={styles.color}
      style={{ backgroundColor: hex }}
    >
      {children}
    </div>
  )
}

export default Color;