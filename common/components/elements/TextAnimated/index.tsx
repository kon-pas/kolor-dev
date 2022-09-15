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
    setCurrentLabel(labels[labelIndex])
  }, [labelIndex, labels]);

  useEffect(() => {
    const interval = setInterval(() => {


      console.log('Works');


    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className={styles['text-animated']}>

      <span className={styles['text-animated__space-filler']}>{currentLabel}</span>

      {labels.map((label, idx) =>
        <span
          className={styles['text-animated__label']}
          key={idx}
        >
          {'your work'}
        </span>
      )}
    </span>
  )
}

export default TextAnimated;