import React, { useState, FC, ReactNode } from "react";
import ReactDOM from "react-dom";

interface IModalProps {
  isOpen: boolean;
  onClose?: () => void;
  children: ReactNode;
}

const Modal = ({ isOpen, onClose, children }: IModalProps) => {
  const [showModal, setShowModal] = useState<boolean>(isOpen);

  const handleClose = (): void => {
    setShowModal(false);
    onClose && onClose();
  };

  return showModal
    ? ReactDOM.createPortal(
        <div className="modal-overlay">
          <div className="modal">
            <button className="modal-close" onClick={handleClose}>
              X
            </button>
            <div className="modal-content">{children}</div>
          </div>
        </div>,
        document.body
      )
    : null;
};

export default Modal;
