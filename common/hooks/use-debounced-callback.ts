import { useEffect, useRef } from "react";
import { useDebounce } from "@hooks";

const useDebouncedCallback = <A extends any[]>(
  callback: (...args: A) => void,
  delay: number
) => {
  const timeoutDescRef = useRef<NodeJS.Timeout>();
  const argsRef = useRef<A>();

  const cleanUp = () =>
    void timeoutDescRef.current && clearTimeout(timeoutDescRef.current);

  useEffect(() => cleanUp, []);

  return (...args: A) => {
    cleanUp();

    argsRef.current = args;

    timeoutDescRef.current = setTimeout(
      () => argsRef.current && callback(...argsRef.current),
      delay
    );
  };
};

export default useDebouncedCallback;
