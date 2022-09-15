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
    let interval: any;
    setTimeout(() => {
      interval = setInterval(() => {
        setLabelIndex(e => (e + 1) % labels.length)
      }, 2000);
    }, 500)
    return () => clearInterval(interval);
  }, [labels]);

  return (
    <div className={styles['text-animated']}>


      <div className={styles['text']}>{currentLabel}</div>

      <div className={styles['block']}></div>
      


      {/* {labels.map((label, idx) =>
        <>
          <div
            className={styles['text-animated__space-filler']}
            style={{
              ...(label === currentLabel) && {opacity: '1', height: '100px'},
              ...(label !== currentLabel) && {opacity: '0', height: '0px'}
            }}
          >{label}</div>

          <span
            className={styles['text-animated__label']}
            key={idx}
          >
            {currentLabel}
          </span>
        </>
      )} */}
    </div>
  )
}

export default TextAnimated;