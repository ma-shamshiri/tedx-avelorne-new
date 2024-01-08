// src/hooks/index.ts

import { useRef, useEffect } from "react";

export function useInterval(callback: () => void, delay: number | null): void {
  const savedCallback = useRef<() => void | null>(() => {});
  
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export function usePrevious<T>(value: T): T {
  const ref = useRef<T>(value);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
