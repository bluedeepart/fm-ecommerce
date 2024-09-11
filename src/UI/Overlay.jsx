import { useRef } from 'react';
import { createPortal } from 'react-dom';

function Overlay({ onClose, cssClass = '', children }) {
  const overlayRef = useRef();

  function handlePopup(event, callback) {
    if (overlayRef.current && overlayRef.current === event.target) {
      callback();
    }
  }

  return createPortal(
    <div
      ref={overlayRef}
      className={`fixed inset-0 overflow-hidden h-screen bg-black bg-opacity-75 transition-all duration-300 ease-in-out z-20 flex items-center justify-center ${cssClass}`}
      onClick={(event) => handlePopup(event, onClose)}
    >
      {children}
    </div>,
    document.getElementById('modal')
  );
};

export default Overlay;
