import React, { useEffect, useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  ButtonSubmitCentered, FieldStyledBorder, FormContainer,
  FormStyled,
  IconPSW,
  IconPSWSlashed,
  LabelPSW,
  Loader,
} from './EditProfileForm.styled';
import { useAuth } from '../../api/zustand/useAuth';
import { useAuthStore } from '../../api/zustand/authStore';
import { Notification } from '../Notification/Notifications';
import { toast } from 'react-toastify';
import { LoaderCircle } from '../Loader/LoaderCircle';

export const EditProfileForm = () => {
  const { user, isError, isLoading } = useAuth();
  const [isFormEditing, setIsFormEditing] = useState(false);

  const setNewValues = useAuthStore(state => state.editData);

  const [isVisibleCurrent, setIsVisibleCurrent] = useState(false);
  const [isVisibleNew, setIsVisibleNew] = useState(false);

  const schema = yup.object().shape({
    name: yup.string().min(3).max(15).required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).max(16).required(),
    newPassword: yup.string().min(6).max(16).required(),
  });

  const initialValues = {
    name: user.name,
    email: user.email,
    password: '',
    newPassword: '',
  };

useEffect(() => {
  if (isError) {
    toast.error("Current password incorrect");
  }
}, [isError]);


  const SubmitHandler = async (values) => {
    setIsFormEditing(true);
    await setNewValues(values);
    setIsFormEditing(false);
  };



  return isFormEditing ? (
    <Loader>
      <LoaderCircle />
    </Loader>
  ) : (
    <FormContainer>
      {isError && <Notification />}
      <Formik
        validationSchema={schema}
        initialValues={initialValues}
        onSubmit={SubmitHandler}>
        {({ handleSubmit, values }) => (
          <FormStyled>
            <label htmlFor='name'>
              <FieldStyledBorder
                disabled={isLoading}
                id='name'
                type='name'
                name='name'
                placeholder={user.name}
              />
              <ErrorMessage name='name' component='div' />
            </label>
            <label htmlFor='email'>
              <FieldStyledBorder
                disabled={isLoading}
                id='email'
                type='email'
                name='email'
                placeholder={user.email}
              />
              <ErrorMessage name='email' component='div' />
            </label>

            <LabelPSW htmlFor='password'>
              <FieldStyledBorder
                disabled={isLoading}
                id='password'
                type={isVisibleCurrent ? "text" : "password"}
                name='password'
                placeholder='Write your current password here'
              />
              {values.password.trim() ? (
                isVisibleCurrent ? (
                  <IconPSWSlashed onClick={() => setIsVisibleCurrent(false)} />
                ) : (
                  <IconPSW onClick={() => setIsVisibleCurrent(true)} />
                )
              ) : null}
              <ErrorMessage name='password' component='div' />
            </LabelPSW>

            <LabelPSW htmlFor='newPassword'>
              <FieldStyledBorder
                disabled={isLoading}
                id='newPassword'
                type={isVisibleNew ? "text" : "password"}
                name='newPassword'
                placeholder='Write your new password here'
              />
              {values.newPassword.trim() ? (
                isVisibleNew ? (
                  <IconPSWSlashed onClick={() => setIsVisibleNew(false)} />
                ) : (
                  <IconPSW onClick={() => setIsVisibleNew(true)} />
                )
              ) : null}
              <ErrorMessage name='newPassword' component='div' />
            </LabelPSW>

            <ButtonSubmitCentered type='submit' disabled={isLoading}>
              {isLoading ? "Saving" : "Save"}
            </ButtonSubmitCentered>
          </FormStyled>
        )}
      </Formik>
    </FormContainer>
  );
};
