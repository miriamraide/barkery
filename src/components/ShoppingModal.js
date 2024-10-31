
import React from 'react';
import '../app/carrito.css';

const ShoppingModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Confirmación</h3>
        <p>¿Estás seguro de que deseas continuar con esta acción?</p>
        <button onClick={onConfirm}>Confirmar</button>
        <button onClick={onClose}>Cancelar</button>
      </div>
    </div>
  );
};

export default ShoppingModal;
