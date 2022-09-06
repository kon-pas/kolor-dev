import styles from './TextUnderline.module.scss';

interface TextUnderlineProps {
  thickness?: number;
  offset?: number;
}

const TextUnderline: React.FC<TextUnderlineProps> = ({
  thickness = 2,
  offset = 0
}) => {
  return (
    <div
      className={styles['text-underline']}
      style={{ 
        height: `${thickness}px`,
        bottom: `-${offset}px`
      }}
    ></div>
  )
}

export default TextUnderline;