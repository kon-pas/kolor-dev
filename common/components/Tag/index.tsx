import styles from './Tag.module.scss';

import SpanMonochrome from '@components/SpanMonochrome';

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
      style={{ 
        ...(type === 'color' && color) && { backgroundColor: `${color}` }
      }}
    >
      {type === 'hash' &&
        <span className={styles['tag__hash-symbol']}>
          #
        </span>
      }

      { type === 'color' && color
        ? <SpanMonochrome color={color}>{children}</SpanMonochrome>
        : <span>{children}</span>
      }
      
    </div>
  )
}

export default Tag;