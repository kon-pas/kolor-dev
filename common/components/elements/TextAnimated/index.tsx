import styles from './TextAnimated.module.scss';

interface TextAnimatedProps {
  labels: string[];
}

const TextAnimated: React.FC<TextAnimatedProps> = ({
  labels
}) => {
  return (
    <span className={styles['text-animated']}>
      { labels.map((label, idx) =>
        <span
          className={styles['label']}
          key={idx}
        >
          {label}
        </span>
      )}
    </span>
  )
}

export default TextAnimated;