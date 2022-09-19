// NOTE: This component is written terribly, but for now it's doing its job. I will rewrite it the other time, surely.

import styles from './TextAnimated.module.scss';

import { useState, useEffect } from 'react';

interface TextAnimatedProps {
  labels: string[];
}

const TextAnimated: React.FC<TextAnimatedProps> = ({
  labels
}) => {
  
  const [labelIndex, setLabelIndex] = useState(0);
  const [currentLabel, setCurrentLabel] = useState(labels[0]);

  useEffect(() => {
    setCurrentLabel(labels[labelIndex % labels.length])
  }, [labelIndex, labels]);

  useEffect(() => {
    let interval: NodeJS.Timer;

    interval = setInterval(() => {
      setTimeout(() => {
        setLabelIndex(e => e + 1);
      }, 400);
    }, 4000);

    return () => clearInterval(interval);
  }, [labels]);

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