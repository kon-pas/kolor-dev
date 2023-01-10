import { useEffect, useRef } from "react";

const useDebounce = (callback: () => void, deps: any[], delay: number) => {
  const timeoutDescRef = useRef<ReturnType<typeof setTimeout>>();

  const cleanUp = () =>
    timeoutDescRef.current && clearTimeout(timeoutDescRef.current);

  useEffect(() => {
    cleanUp();

    timeoutDescRef.current = setTimeout(callback, delay);

    return cleanUp;
  }, [callback, delay, deps]);
};

export default useDebounce;
