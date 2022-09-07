// NOTE: Parent component has to be `display: relative`.

import styles from './TextUnderline.module.scss';

interface TextUnderlineProps {
  children?: string;
  thickness?: number;
  offset?: number;
  opacity?: number;
}

const TextUnderline: React.FC<TextUnderlineProps> = ({
  children,
  thickness = 10,
  offset = 0,
  opacity = 0.75
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
          bottom: `-${offset}px`,
          opacity: `${opacity}`
        }}
      ></div>
    </>
  )
}

export default TextUnderline;