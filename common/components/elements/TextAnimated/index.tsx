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
      setLabelIndex(e => (e + 1) % labels.length)
    }, 3000);
    return () => clearInterval(interval);
  }, [labels]);

  return (
    <span className={styles['text-animated']}>


      {labels.map((label, idx) =>
        <>
          <div
            className={styles['text-animated__space-filler']}
            style={{
              ...(label === currentLabel) && {opacity: '1', height: '100px'},
              ...(label !== currentLabel) && {opacity: '0', height: '0px'}
            }}
          >{label}</div>

          {/* <span
            className={styles['text-animated__label']}
            key={idx}
          >
            {currentLabel}
          </span> */}
        </>
      )}
    </span>
  )
}

export default TextAnimated;