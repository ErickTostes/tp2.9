import React from 'react';
import './Modal.css'; 

const Modal = ({ onClose, onConfirm, message }) => {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Confirmação</h2>
                <p>{message}</p>
                <button onClick={onConfirm}>Confirmar</button>
                <button onClick={onClose}>Cancelar</button>
            </div>
        </div>
    );
};

export default Modal;
