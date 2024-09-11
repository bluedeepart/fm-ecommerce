import { useEffect } from 'react';

function useClassRemover(ref, togglerRef, handler, showState) {

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target) && !togglerRef.current.contains(event.target)) {
        handler(false);
      }
    }
    if (showState) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, togglerRef, handler, showState]);
}

export default useClassRemover;
