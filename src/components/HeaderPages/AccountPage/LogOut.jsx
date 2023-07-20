import React from "react";
import { useNavigate } from "react-router-dom";
import { BtnStyled } from "../../TemplateComponents/buttonStyled";
import { ButtonBox, ButtonLabel, LabelSpan } from "./LogOut.styled";
import { useAuthStore } from "../../../api/zustand/authStore";
import { useAuth } from "../../../api/zustand/useAuth";
import { toast } from "react-toastify";
import { Notification } from "../../Notification/Notifications";

export const LogOutPage = () => {
  const navigate = useNavigate();
  const { isError } = useAuth();
  const logOut = useAuthStore((state) => state.logOut);

  const onClickHandler = async() => {
    await logOut();
    if (!isError) {
      toast.success('You successfully logged out!')
    }
    navigate("/");
  };

  return (
    <ButtonBox>
      {!isError && <Notification />}
      <ButtonLabel htmlFor='button'>
        After pushing <LabelSpan>Log Out</LabelSpan> button
        <br />
        you will be redirected on the the main page
      </ButtonLabel>
      <BtnStyled id='button' onClick={onClickHandler}>
        Log Out
      </BtnStyled>
    </ButtonBox>
  );
};
