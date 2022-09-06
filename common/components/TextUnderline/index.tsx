import styles from './TextUnderline.module.scss';

interface TextUnderlineProps {
  thickness?: number;
  offset?: number;
  opacity?: number
}

const TextUnderline: React.FC<TextUnderlineProps> = ({
  thickness = 2,
  offset = 0,
  opacity = 0.75
}) => {
  return (
    <div
      className={styles['text-underline']}
      style={{ 
        height: `${thickness}px`,
        bottom: `-${offset}px`,
        opacity: `${opacity}`
      }}
    ></div>
  )
}

export default TextUnderline;