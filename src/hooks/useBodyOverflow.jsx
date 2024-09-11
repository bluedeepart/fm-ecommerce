import { useEffect } from 'react';

function useBodyOverflow(showState) {
  useEffect(() => {
    const body = document.body;
    function toggleOverflow() {
      if (showState) {
        body.classList.add('overflow-hidden', 'pe-[17px]');
      } else {
        body.classList.remove('overflow-hidden', 'pe-[17px]');
      }
    }
    toggleOverflow();

    return () => {
      body.classList.remove('overflow-hidden', 'pe-[17px]');
    };
  }, [showState]);
}

export default useBodyOverflow;
