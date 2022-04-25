import React, { useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import { Container, InputBox, UserDetails } from "./styledComponents";
import { ContinueButton } from "../form/styles/styles";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { selectors, useProvider } from "../../model";
import { handleSubmit } from "./helper/handleSubmit";
import { useNavigate } from "react-router-dom";

const INITIAL_STATE = {
  username: "",
  password: "",
  first_name: "",
  last_name: "",
  email: "",
  address: "",
  postal: "",
  birth_date: "",
};

export const RegistrationForm = () => {
  const [state, dispatch] = useProvider([selectors.url, selectors.token, selectors.username]);
  const navigate = useNavigate();

  useEffect(() => {
    if (state.username) {
      navigate(`/info/${state.username}`);
    }
  }, [state.username]);
  return (
    <>
      <Container>
        <h1>Registration</h1>
        <h3>Your Account Details</h3>
        <Formik
          initialValues={INITIAL_STATE}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            window.sessionStorage.setItem("values", JSON.stringify(values));
            handleSubmit(values, state, dispatch, setSubmitting, resetForm);
          }}
          validationSchema={Yup.object({
            username: Yup.string()
              .max(20, "Must be 20 characters or less.")
              .required("Username is required."),
            password: Yup.string().required("Password is required."),
            first_name: Yup.string()
              .max(20, "Must be 20 characters or less.")
              .required("First name is required."),
            last_name: Yup.string()
              .max(20, "Must be 20 characters or less.")
              .required("Last name is required."),
            address: Yup.string().required("Address is required."),
            email: Yup.string().email("Invalid email format.").required("Email is required."),
            postal: Yup.string()
              .min(5, "Must be 5 characters")
              .max(5, "Must be 5 characters")
              .required("Postal is required."),
            birth_date: Yup.date().max(new Date()).required("Birthdate is required."),
          })}
        >
          {(formik) => {
            return (
              <Form>
                <UserDetails>
                  <div>
                    <span className='details'>Username*</span>
                    <InputBox
                      className={`d-inline-block ${
                        formik.touched.username && !formik.errors.username
                          ? "form-control is-valid"
                          : "form-control"
                      }`}
                      type='text'
                      id='username'
                      name='username'
                      placeholder='Enter your username'
                    ></InputBox>
                    {formik.touched.username && formik.errors.username ? (
                      <div className='invalid-feedback text-black fw-bold'>
                        {formik.errors.username}
                      </div>
                    ) : null}
                  </div>
                  <div>
                    <span className='details'>Password*</span>
                    <InputBox
                      className={`d-inline-block ${
                        formik.touched.password && !formik.errors.password
                          ? "form-control is-valid"
                          : "form-control"
                      }`}
                      type='password'
                      id='password'
                      name='password'
                      placeholder='Enter your password'
                    ></InputBox>
                    {formik.touched.password && formik.errors.password ? (
                      <div className='invalid-feedback text-black fw-bold'>
                        {formik.errors.password}
                      </div>
                    ) : null}
                  </div>
                  <div>
                    <span className='details'>First Name*</span>
                    <InputBox
                      className={`d-inline-block ${
                        formik.touched.first_name && !formik.errors.first_name
                          ? "form-control is-valid"
                          : "form-control"
                      }`}
                      type='text'
                      id='first_name'
                      name='first_name'
                      placeholder='Enter your first name'
                    ></InputBox>
                    {formik.touched.first_name && formik.errors.first_name ? (
                      <div className='invalid-feedback text-black fw-bold'>
                        {formik.errors.first_name}
                      </div>
                    ) : null}
                  </div>
                  <div>
                    <span className='details'>Last Name*</span>
                    <InputBox
                      className={`d-inline-block ${
                        formik.touched.last_name && !formik.errors.last_name
                          ? "form-control is-valid"
                          : "form-control"
                      }`}
                      type='text'
                      id='last_name'
                      name='last_name'
                      placeholder='Enter your last name'
                    ></InputBox>
                    {formik.touched.last_name && formik.errors.last_name ? (
                      <div className='invalid-feedback text-black fw-bold'>
                        {formik.errors.last_name}
                      </div>
                    ) : null}
                  </div>
                  <div>
                    <span className='details'>Address*</span>
                    <InputBox
                      className={`d-inline-block ${
                        formik.touched.address && !formik.errors.address
                          ? "form-control is-valid"
                          : "form-control"
                      }`}
                      type='text'
                      id='address'
                      name='address'
                      placeholder='Enter your address'
                    ></InputBox>
                    {formik.touched.address && formik.errors.address ? (
                      <div className='invalid-feedback text-black fw-bold'>
                        {formik.errors.address}
                      </div>
                    ) : null}
                  </div>
                  <div>
                    <span className='details'>Email*</span>
                    <InputBox
                      className={`d-inline-block ${
                        formik.touched.email && !formik.errors.email
                          ? "form-control is-valid"
                          : "form-control"
                      }`}
                      type='email'
                      id='email'
                      name='email'
                      placeholder='Enter your email'
                    ></InputBox>
                    {formik.touched.email && formik.errors.email ? (
                      <div className='invalid-feedback text-black fw-bold'>
                        {formik.errors.email}
                      </div>
                    ) : null}
                  </div>
                  <div>
                    <span className='details'>Postal*</span>
                    <InputBox
                      className={`d-inline-block ${
                        formik.touched.email && !formik.errors.email
                          ? "form-control is-valid"
                          : "form-control"
                      }`}
                      type='text'
                      id='postal'
                      name='postal'
                      placeholder='Enter your postal code'
                    ></InputBox>
                    {formik.touched.postal && formik.errors.postal ? (
                      <div className='invalid-feedback text-black fw-bold'>
                        {formik.errors.postal}
                      </div>
                    ) : null}
                  </div>
                  <div>
                    <span className='details'>Birthdate*</span>
                    <InputBox
                      className={`d-inline-block ${
                        formik.touched.birth_date && !formik.errors.birth_date
                          ? "form-control is-valid"
                          : "form-control"
                      }`}
                      type='text'
                      id='birth_date'
                      name='birth_date'
                      placeholder='YYYY-MM-DD'
                    ></InputBox>
                    {formik.touched.birth_date && formik.errors.birth_date ? (
                      <div className='invalid-feedback text-black fw-bold'>
                        {formik.errors.birth_date}
                      </div>
                    ) : null}
                  </div>
                </UserDetails>
                <ContinueButton type='submit' disabled={formik.isSubmitting}>
                  {formik.isSubmitting ? "Please wait..." : "Sign Up"}
                </ContinueButton>
              </Form>
            );
          }}
        </Formik>
      </Container>
    </>
  );
};
