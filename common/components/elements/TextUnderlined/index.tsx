// NOTE: Parent component has to be `display: relative`.

import styles from './TextUnderline.module.scss';

import type { GradientHue } from '@types';

interface TextUnderlineProps {
  children?: string;
  thickness?: number;
  offset?: number;
  opacity?: number;
  colors?: GradientHue;
}

const TextUnderline: React.FC<TextUnderlineProps> = ({
  children,
  thickness = 10,
  offset = 0,
  opacity = 0.75,
  colors
}) => {
  return (
    <>
      { children && 
        <span>{children}</span>
      }
      <div
        className={styles['text-underline']}
        style={{ 
          height: `${thickness}px`,
          bottom: `${offset * (-1)}px`,
          opacity: `${opacity}`,
          ...colors && {backgroundImage: `linear-gradient(to right, ${colors.join(', ')})`}
        }}
      ></div>
    </>
  )
}

export default TextUnderline;