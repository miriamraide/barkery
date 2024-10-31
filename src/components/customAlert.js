

import { useEffect } from 'react';

const CustomAlert = ({ message, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose(); // Cerrar la alerta automáticamente después de 3 segundos
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    isVisible && (
      <div className="alert">
        <p>{message}</p>
        <button onClick={onClose}>X</button>
      </div>
    )
  );
};

export default CustomAlert;
