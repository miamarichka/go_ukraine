import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { BtnStyled } from "../../TemplateComponents/buttonStyled";
import { ModalOverlay } from "../../ModalOverlay/ModalOverlay";
import { ReviewForm } from "../../Forms/ReviewForm";
import { useAuth } from "../../../api/zustand/useAuth";

const LeaveReviewBtnStyled = styled(BtnStyled)`
  margin-bottom: 57px;
`;

const NotificationReview = styled.p`
  font-size: 20px;
  text-align: center;
  font-weight: 600;
`;

export const LeaveReviewBtn = () => {
  const { isLoggedIn } = useAuth();
  const [isOpenModal, setIsOpenModal] = useState(false);

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
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      window.removeEventListener("keydown", modalHandler);
      document.body.classList.remove("modal-open");
    };
  }, [isOpenModal, modalHandler]);

  return (
    <>
      <LeaveReviewBtnStyled type='button' onClick={() => toggleModal()}>
        Leave a review
      </LeaveReviewBtnStyled>
      {isOpenModal && (
        <ModalOverlay onCloseModal={toggleModal}>
          {isLoggedIn ? (
            <ReviewForm />
          ) : (
            <NotificationReview>
              Only users who has account can leave a review
            </NotificationReview>
          )}
        </ModalOverlay>
      )}
    </>
  );
};
