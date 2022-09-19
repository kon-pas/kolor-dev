// NOTE: This component is written terribly, but for now it's doing its job. I will rewrite it the other time, surely.

import styles from './TextAnimated.module.scss';

import { useState, useEffect, useRef } from 'react';

interface TextAnimatedProps {
  labels: string[];
}

const TextAnimated: React.FC<TextAnimatedProps> = ({
  labels
}) => {
  
  const [labelIndex, setLabelIndex] = useState(0);
  const [currentLabel, setCurrentLabel] = useState(labels[0]);

  const requestRef = useRef<number>();

  const animate = (): void  => {
    setLabelIndex(e => e + 1);
    setTimeout(() => {
      requestRef.current = requestAnimationFrame(animate);
    }, 4000);
  }

  // setTimeout(() => animate(), 2400);

  useEffect(() => {
    setCurrentLabel(labels[labelIndex % labels.length])
  }, [labelIndex, labels]);

  useEffect(() => {
    setTimeout(() => {
      requestRef.current = requestAnimationFrame(animate);
    }, 2400);
    // requestRef.current = requestAnimationFrame(animate);
    // return () => cancelAnimationFrame(requestRef.current);
  }, []);

  // useEffect(() => {
    // const animate = (): void  => {
    //   setLabelIndex(e => e + 1);
    //   setTimeout(() => {
    //     requestRef.current = requestAnimationFrame(animate);
    //   }, 4000);
    // }
    // setTimeout(() => animate(), 2400);
  // }, []);

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