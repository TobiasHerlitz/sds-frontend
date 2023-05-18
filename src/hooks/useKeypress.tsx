import { useEffect, RefObject, useCallback } from 'react';

interface useKeypressProps {
  key: any
  callback: () => void
}

export const useKeypress = ({key, callback}: useKeypressProps) => {
  const handleKeypress = useCallback((event: any) => {
    if (event.key === key) {
      callback();
    }
  }, [callback]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeypress);

    return () => {
      window.removeEventListener('keydown', handleKeypress);
    };
  }, [handleKeypress]);
};
