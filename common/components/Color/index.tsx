import styles from './Color.module.scss'

import type { HexColor } from '@types';

interface ColorProps {
  hex: HexColor;
  children?: React.ReactNode;
}

const Color: React.FC<ColorProps> = ({ hex, children }) => {
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