import styles from './Tag.module.scss';

import SpanMonochrome from '@components/elements/SpanMonochrome';
import { MainColors } from '@enums';
 
interface TagProps {
  children?: React.ReactNode;
  type?: 'hash' | 'color';
  color?: MainColors;
  onClick?: () => void;
}

const Tag: React.FC<TagProps> = ({ children, type, color, onClick }) => {
  const indexOfS = Object.values(MainColors).indexOf(color as unknown as MainColors);
  const key = Object.keys(MainColors)[Object.values(MainColors).indexOf(color as unknown as MainColors)];
  return (
    <div
      className={styles.tag}
      onClick={onClick}
      style={{ 
        ...(type === 'color' && color) && { backgroundColor: `${color}` }
      }}
    >
      {type === 'hash' &&
        <span>
          <span className={styles['tag__hash-symbol']}>
            #
          </span>
          {children}
        </span>
      }

      {type === 'color' && color &&
        <SpanMonochrome color={color}>
          {Object.keys(MainColors)[Object.values(MainColors).indexOf(color as unknown as MainColors)]}
        </SpanMonochrome>
      }
    </div>
  )
}

export default Tag;