import React, { useState } from "react";
import { Form, Formik } from "formik";

import * as Yup from "yup";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";

import { ContinueButton } from "../styledComponents";
import { InputError, InputField, InputFieldContainer } from "../../../theme";
import { useLoginForm } from "../hooks";
import { errorHandling } from "../errors/errorHandling";
import { handleError } from "../../../model/actions";
import { selectors, useProvider } from "../../../model";

export const SignInForm = ({ isInModal }) => {
  const [{ BASE_URL }, dispatch] = useProvider([selectors.url]);
  let [error] = useState("");
  const { setState } = useLoginForm(isInModal);
  const token = window.sessionStorage.getItem("token");
  return (
    <Formik
      initialValues={{ username: "", password: "", error: "" }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        axios
          .post(
            `${BASE_URL}/users/login`,
            {
              username: values.username,
              password: values.password,
            },
            {
              headers: { authorization: `Bearer ${token}` },
            }
          )
          .then((res) => {
            if (errorHandling(res.data)) {
              dispatch(
                handleError({
                  message: res.data.message,
                  time: new Date().getTime(),
                })
              );
              resetForm();
            } else {
              resetForm();
              setState(res.data);
            }
          })
          .then(() => setSubmitting(false))
          .catch((error) =>
            dispatch(
              handleError({
                message: error.message,
                time: new Date().getTime(),
              })
            )
          );
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
              className={formik.touched.username && formik.errors.username && "is-invalid"}
              type='text'
            />
            {formik.touched.username && formik.errors.username ? (
              <InputError>{formik.errors.username}</InputError>
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
