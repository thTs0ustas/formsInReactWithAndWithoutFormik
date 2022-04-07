import React from "react";
import { Form, Formik } from "formik";

import * as Yup from "yup";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";

import { ContinueButton } from "../styledComponents";
import { InputError, InputField, InputFieldContainer } from "../../../theme";
import { useLoginForm } from "../hooks";

export const SignInForm = ({ isInModal }) => {
  const { setState } = useLoginForm(isInModal);
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        axios
          .post("http://localhost:4000/users/login", {
            username: values.username,
            password: values.password,
          })
          .then((res) => {
            resetForm();
            setState(res.data);
          })
          .then(() => setSubmitting(false));
      }}
      validationSchema={Yup.object({
        username: Yup.string()
          .max(20, "Must be 20 characters or less.")
          .required("Name is required."),
        password: Yup.string().required("Password is required."),
      })}
    >
      {(formik) => (
        <Form className='w-100'>
          <InputFieldContainer>
            <InputField
              id='username'
              name='username'
              placeholder='Username'
              className={
                formik.touched.username &&
                formik.errors.username &&
                "is-invalid"
              }
              type='text'
            />
            {formik.touched.username && formik.errors.username ? (
              <InputError>{formik.errors.username}</InputError>
            ) : null}
          </InputFieldContainer>

          <InputFieldContainer>
            <InputField
              id='password'
              name='password'
              placeholder='Password'
              className={
                formik.touched.password &&
                formik.errors.password &&
                "is-invalid"
              }
              type='password'
            />
            {formik.touched.password && formik.errors.password ? (
              <InputError>{formik.errors.password}</InputError>
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
