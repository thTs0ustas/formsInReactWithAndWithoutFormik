import React, { useState } from "react";
import { Form, Formik } from "formik";

import * as Yup from "yup";

import "bootstrap/dist/css/bootstrap.min.css";

import { ContinueButton } from "../styledComponents";
import { InputError, InputField, InputFieldContainer } from "../../../theme";
import { useLoginForm } from "../hooks";
import { useDispatch } from "react-redux";
import requestLogin from "../actions/requestLoginAction";

export const SignInForm = ({ isInModal }) => {
  const dispatch = useDispatch();
  let [error] = useState("");
  useLoginForm(isInModal);

  return (
    <Formik
      initialValues={{ usernameEmail: "", password: "", error: "" }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        dispatch(requestLogin({ usernameEmail: values.usernameEmail, password: values.password }));
        resetForm();
        setSubmitting(false);
      }}
      validationSchema={Yup.object({
        usernameEmail: Yup.string()
          .max(50, "Must be 20 characters or less.")
          .required("Name is required."),
        password: Yup.string().required("Password is required."),
      })}
    >
      {(formik) => (
        <Form className='w-100'>
          <InputFieldContainer>
            <InputField
              id='usernameEmail'
              name='usernameEmail'
              placeholder='Username or Email'
              className={
                formik.touched.usernameEmail && formik.errors.usernameEmail && "is-invalid"
              }
              type='text'
            />
            {formik.touched.usernameEmail && formik.errors.usernameEmail ? (
              <InputError>{formik.errors.usernameEmail}</InputError>
            ) : error ? (
              <InputError>{error}</InputError>
            ) : null}
          </InputFieldContainer>

          <InputFieldContainer>
            <InputField
              id='password'
              name='password'
              placeholder='Password'
              className={formik.touched.password && formik.errors.password && "is-invalid"}
              type='password'
            />
            {formik.touched.password && formik.errors.password ? (
              <InputError>{formik.errors.password}</InputError>
            ) : error ? (
              <InputError>{error}</InputError>
            ) : null}
          </InputFieldContainer>

          <ContinueButton type='submit' disabled={formik.isSubmitting}>
            {formik.isSubmitting ? "Please wait..." : "Continue"}
          </ContinueButton>
        </Form>
      )}
    </Formik>
  );
};
