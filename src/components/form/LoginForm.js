import React from "react";
import { Form, Formik } from "formik";

import * as Yup from "yup";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";

import { ContinueButton, FormOuterDiv } from "./styledComponents/styles";
import { InputField } from "../../theme";
import { useLoginForm } from "./hooks/useLoginForm";

export const LoginForm = () => {
  const { state, setState } = useLoginForm();
  return (
    <FormOuterDiv>
      <h1>MOVIE CLUB SIGN IN</h1>
      <p>Please enter your username and password to continue.</p>
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
            .max(20, "Must be 20 characters or less")
            .required("Name is required"),
          password: Yup.string().required("Password is required"),
        })}
      >
        {(formik) => (
          <Form className='w-100'>
            <div>
              <InputField
                id='username'
                name='username'
                placeholder='Username'
                className={`  d-inline-block
                  ${
                    formik.touched.username && formik.errors.username
                      ? "form-control is-invalid"
                      : "form-control"
                  }`}
                type='text'
              />
              {formik.touched.username && formik.errors.username ? (
                <div className='invalid-feedback text-black fw-bold '>{formik.errors.username}</div>
              ) : null}
            </div>

            <div>
              <InputField
                id='password'
                name='password'
                placeholder='Password'
                className={`  d-inline-block 
                  ${
                    formik.touched.username && formik.errors.username
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  `}
                type='password'
              />
              {formik.touched.password && formik.errors.password ? (
                <div className='invalid-feedback text-black fw-bold'>{formik.errors.password}</div>
              ) : null}
            </div>

            <ContinueButton type='submit' disabled={formik.isSubmitting}>
              {formik.isSubmitting ? "Please wait..." : "Continue"}
            </ContinueButton>
          </Form>
        )}
      </Formik>
      <div>{state ? (state.message ? state.message : null) : ""}</div>
    </FormOuterDiv>
  );
};
