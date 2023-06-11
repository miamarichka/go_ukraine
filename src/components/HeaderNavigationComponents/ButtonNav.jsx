import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { BtnStyled } from "../TemplateComponents/buttonStyled";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay";
import { LoginForm } from "../Forms/LoginForm";
import { SignUpForm } from "../Forms/SignUpFrom";
import { useAuth } from "../../api/zustand/useAuth";

export const ButtonNav = ({ buttonName }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { isHasAccount } = useAuth();

  const toggleModal = useCallback(() => {
    setIsOpenModal((prevState) => !prevState);
  }, [setIsOpenModal]);

  const modalHandler = useCallback(
    (e) => {
      if (e.code === "Escape") {
        toggleModal();
      }
    },
    [toggleModal]
  );

  useEffect(() => {
    window.addEventListener("keydown", modalHandler);
    if (isOpenModal) {
      document.body.classList.add('modal-open')
    } else {
      document.body.classList.remove('modal-open')
    }

    return () => {
      window.removeEventListener("keydown", modalHandler);
      document.body.classList.remove("modal-open");
    };
  }, [isOpenModal, modalHandler]);

  return (
    <>
      <BtnStyled type='button' onClick={toggleModal}>
        {buttonName}
      </BtnStyled>
      {isOpenModal && (
        <ModalOverlay onCloseModal={toggleModal}>
          {isHasAccount ? <LoginForm /> : <SignUpForm />}
        </ModalOverlay>
      )}
    </>
  );
};

ButtonNav.propTypes = {
  buttonName: PropTypes.string.isRequired,
};
