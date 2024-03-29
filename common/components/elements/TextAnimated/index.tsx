// @@@ NOTE: This component is written terribly, but for now it's doing its job.
// I will rewrite it the other time, surely.
// @@@ UPDATE: Do NOT use it for now. Animation is out of sync.

import styles from "./TextAnimated.module.scss";

import type { FC } from "react";
import { useState, useEffect, useRef, useCallback } from "react";

interface TextAnimatedProps {
  labels: string[];
}

/**
 * @deprecated To be repaired. Animation is out of sync.
 */
const TextAnimated: FC<TextAnimatedProps> = ({ labels }) => {
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
      if (requestRef.current) return cancelAnimationFrame(requestRef.current);
    };
  }, [animate]);

  useEffect((): void => {
    setCurrentLabel(labels[labelIndex % labels.length]);
  }, [labelIndex, labels]);

  return (
    <div className={styles["text-animated"]}>
      <div className={styles["text-animated__text"]}>{currentLabel}</div>

      <div className={styles["text-animated__block"]} />
    </div>
  );
};

export default TextAnimated;
