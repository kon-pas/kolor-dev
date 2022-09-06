import styles from './TextUnderline.module.scss';

interface TextUnderlineProps {
  thickness?: number;
  offset?: number;
}

const TextUnderline: FC<TextUnderlineProps> = (
  thickness = 3,
  offset = 0
) => <div
  className={styles['text-underline']}
  style={{ 
    height: `${thickness}px`,
    bottom: `-${offset}px`
   }}
></div>

export default TextUnderline;