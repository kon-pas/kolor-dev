import styles from './TextGradiented.module.scss';

import type { GradientHue } from '@types';

interface TextGradientedProps {
  colors: GradientHue;
  children: string;
}

const TextGradiented: React.FC<TextGradientedProps> = ({ children: text, colors }) => {
  return(
    <span 
      className={styles['text-gradiented']}
      style={{ 
        backgroundImage: `linear-gradient(to right, ${colors.join(', ')})`
      }}
    >
      {text}
    </span>
  )
}

export default TextGradiented;