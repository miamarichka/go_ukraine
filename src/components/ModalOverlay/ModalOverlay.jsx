import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Backdrop, Modal, CloseSvg } from './ModalOverlay.styled';
import { useAuth } from '../../api/zustand/useAuth';
import { LoaderCircle } from '../Loader/LoaderCircle';

const modalRoot = document.querySelector('#modal-root');

export const ModalOverlay = ({ onCloseModal, children }) => {
  const { isLoading } = useAuth();
  
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onCloseModal();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      {isLoading ? (
        <LoaderCircle />
      ) : (
        <Modal isLoading={isLoading}>
          <CloseSvg onClick={onCloseModal} />
          {children}
        </Modal>
      )}
    </Backdrop>,
    modalRoot
  );
};

ModalOverlay.propTypes = {
  onCloseModal: PropTypes.func,
};
