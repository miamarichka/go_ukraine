import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useAuthStore } from '../../api/zustand/authStore';
import { FormStyled, FieldStyled, FormContainer,
  FormHeader, LabelRememberMe, SpanLine, SpanText,
  SpanWrap, ButtonSubmit, InnerWrapMedia,
  InnerSpanQuestion, InnerButtonLink,
  InnerTextWrap } from './SignUpForm.styled';
import { SocialMediaEnter } from './SocialMediaEnter';
import { useAuth } from '../../api/zustand/useAuth';
import { EMAIL_REGEX } from '../../utils/patterns';
import { Notification} from '../Notification/Notifications';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router';

export const SignUpForm = () => {
    const navigate = useNavigate();
  const registerUser = useAuthStore((state) => state.registration);
  const hasAccount = useAuthStore(state => state.hasAccount);
  const { isError, isLoading } = useAuth();

  const schema = yup.object().shape({
    name: yup
      .string()
      .min(3)
      .max(30)
      .required(),
    email: yup
      .string()
      .email()
      .matches(EMAIL_REGEX, "Invalid email")
      .required(),
    password: yup.string().min(6).max(16).required(),
  });

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const SubmitHandler = async (values) => {
    const result = await registerUser(values);
        if (result) {
          navigate("/account/editprofile", { replace: true });
        } else {
          toast.error("Email or password wrong");
        }
  };

  const showError = isError && !isLoading;

  return (
    <FormContainer>
      <FormHeader>Create Account</FormHeader>
      {showError && <Notification/>}
      <Formik
        validationSchema={schema}
        initialValues={initialValues}
        onSubmit={SubmitHandler}>
        <FormStyled>
          <label htmlFor='name'>
            <FieldStyled id='name' type='text' name='name' placeholder='Name' />
            <ErrorMessage name='name' component='div' />
          </label>
          <label htmlFor='email'>
            <FieldStyled
              id='email'
              type='email'
              name='email'
              placeholder='Email'
            />
            <ErrorMessage name='email' component='div' />
          </label>

          <label htmlFor='password'>
            <FieldStyled
              id='password'
              type='password'
              name='password'
              placeholder='Password'
            />
            <ErrorMessage name='password' component='div' />
          </label>
          <LabelRememberMe htmlFor='rememberMe' className='rememberMe'>
            <FieldStyled
              className='rememberMe'
              id='rememberMe'
              type='checkbox'
              name='rememberMe'
            />{" "}
            Remember me
            <ErrorMessage name='rememberMe' component='div' />
          </LabelRememberMe>
          <InnerWrapMedia>
            <SpanWrap>
              <SpanLine />
              <SpanText>Or Sign Up With</SpanText>
              <SpanLine />
            </SpanWrap>
            <SocialMediaEnter />
            <ButtonSubmit type='submit' disabled={isLoading}>
              Sign Up
            </ButtonSubmit>
            <InnerTextWrap>
              <InnerSpanQuestion>Already have an account?</InnerSpanQuestion>
              <InnerButtonLink type='button' onClick={() => hasAccount()}>
                Log In here
              </InnerButtonLink>
            </InnerTextWrap>
          </InnerWrapMedia>
        </FormStyled>
      </Formik>
    </FormContainer>
  );
};
