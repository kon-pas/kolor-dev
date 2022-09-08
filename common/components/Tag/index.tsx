import styles from './Tag.module.scss';

import type { MainColors } from '@enums';
 
interface TagProps {
  children?: React.ReactNode;
  type?: 'hash' | 'color';
  color?: MainColors;
  onClick?: () => void;
}

const Tag: React.FC<TagProps> = ({ children, type, color, onClick }) => {
  return (
    <div
      className={styles.tag}
      onClick={onClick}
    >
      { type === 'color' && color }
      <span className={styles.tag__label}>
        { type === 'hash' && '#' }
        { children }
      </span>
    </div>
  )
}

export default Tag;