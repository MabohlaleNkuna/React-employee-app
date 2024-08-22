import React from 'react';
import Button from './Button'; 
import './Employee.css';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <Button onClick={onClose} className="modal-close-btn">X</Button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
