import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../../Icons/Arrow-left.svg";
import {
  BackButton,
  ImgNameWrapper,
  LabelImg,
  ProfileImg,
  TitleAccount,
  TitleWrapper,
  UserNameText,
} from "./Account.styled";
import { Container } from "../../TemplateComponents/Container.styled";
import { AccountInnerNavigation } from "./AccountInnerNavigation";
import { Footer } from "../../Footer/Footer";
import { useAuth } from "../../../api/zustand/useAuth";
import { useAuthStore } from "../../../api/zustand/authStore";
import { toast } from "react-toastify";
import { Notification } from "../../Notification/Notifications";
import { Loader } from "../../Forms/EditProfileForm.styled";
import { LoaderCircle } from "../../Loader/LoaderCircle";

export const Account = () => {
  const { user, isLoading } = useAuth();
  const [isFormatErr, setIsFormatErr] = useState(false);
  const [isImgUpdating, setIsImgUpdating] = useState(false);

  const navigation = useNavigate();

  const uploadImg = useAuthStore((state) => state.uploadPicture);

  const inputUploadHandler = async(e) => {
    setIsFormatErr(false);

    if (e.target.files[0].type !== "image/jpeg") {
      setIsFormatErr(true);
       toast.error("Upload only images");
      return;
    };

  setIsImgUpdating(true);
  const formData = new FormData();
  formData.append("avatar", e.target.files[0]);

    await uploadImg(formData);
    setIsImgUpdating(false);
  };

  return (
    <>
      <Container>
        <TitleWrapper>
          <BackButton onClick={() => navigation(-1)}>
            <ArrowLeft />
          </BackButton>
          <TitleAccount>Your Profile</TitleAccount>
        </TitleWrapper>
        <ImgNameWrapper>
          {isImgUpdating ? (
            <Loader>
              <LoaderCircle />
            </Loader>
          ) : (
            <>
              {isFormatErr && <Notification />}
              <ProfileImg src={user.avatar || ""} alt='' accept='image/*' />
              <form action='' encType='multipart/form-data'>
                <input
                  type='file'
                  id='avatar'
                  name='avatar'
                  onChange={inputUploadHandler}
                  hidden
                />
                <LabelImg htmlFor='avatar'>Choose image</LabelImg>
              </form>
            </>
          )}
          <UserNameText>{user.name}</UserNameText>
        </ImgNameWrapper>
        <AccountInnerNavigation />
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};
