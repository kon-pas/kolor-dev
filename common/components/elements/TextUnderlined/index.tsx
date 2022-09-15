// NOTE: Parent component has to be `display: relative`.

import styles from './TextUnderline.module.scss';

import type { GradientHue, EightDirections } from '@types';

interface TextUnderlineProps {
  children?: string;
  thickness?: number;
  offset?: number;
  opacity?: number;
  colors?: GradientHue;
  direction?: EightDirections;
}

const TextUnderline: React.FC<TextUnderlineProps> = ({
  children,
  thickness = 10,
  offset = 0,
  opacity = 0.75,
  colors,
  direction
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
          ...colors && {backgroundImage: `linear-gradient(to ${direction ?? 'right'}, ${colors.join(', ')})`}
        }}
      ></div>
    </>
  )
}

export default TextUnderline;