// NOTE: This component is written terribly, but for now it's doing its job. I will rewrite it the other time, surely.

import styles from './TextAnimated.module.scss';

import {
  useState,
  useEffect,
  useRef,
  useCallback
} from 'react';

interface TextAnimatedProps {
  labels: string[];
}

const TextAnimated: React.FC<TextAnimatedProps> = ({
  labels
}) => {
  const [labelIndex, setLabelIndex] = useState<number>(0);

  const [currentLabel, setCurrentLabel] = useState<string>(labels[0]);

  const requestRef = useRef<number>();

  const animate = useCallback((): void => {
    setLabelIndex(e => e + 1);
    setTimeout((): void => {
      requestRef.current = requestAnimationFrame(animate);
    }, 4000);
  }, []);

  useEffect((): { (): void } => {
    setTimeout((): void => {
      requestRef.current = requestAnimationFrame(animate);
    }, 2400);
    return () => {
      if(requestRef.current)
      return cancelAnimationFrame(requestRef.current);
    }
  }, [animate]);
  
  useEffect((): void => {
    setCurrentLabel(labels[labelIndex % labels.length])
  }, [labelIndex, labels]);

  return (
    <div className={styles['text-animated']}>
      <div className={styles['text']}>
        {currentLabel}
      </div>

      <div className={styles['block']} />
    </div>
  )
}

export default TextAnimated;