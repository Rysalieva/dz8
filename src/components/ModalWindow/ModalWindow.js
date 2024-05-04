import React from 'react';
import './ModalWindow.css';

const ModalWindow = ({ onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-header">
                    <h2>Modal Window</h2>
                    <span className="close" onClick={onClose}>&times;</span>
                </div>
                <div className="modal-body">
                    <p>Modal content here</p>
                </div>
            </div>
        </div>
    );
};

export default ModalWindow;
