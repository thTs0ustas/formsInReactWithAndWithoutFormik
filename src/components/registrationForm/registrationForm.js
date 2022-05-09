import React, { useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Container, ContinueButton, InputBox, UserDetails } from "./styledComponents";
import registerUserAction from "./actions/registerUserAction";
import { INITIAL_STATE } from "./data/initialState";

export function RegistrationForm() {
  const { username } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (username) {
      navigate(`/info/${username}`);
    }
  }, []);

  return (
    <Container>
      <h1>Registration</h1>
      <h3>Your Account Details</h3>
      <Formik
        initialValues={INITIAL_STATE}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          window.sessionStorage.setItem("values", JSON.stringify(values));
          dispatch(registerUserAction(values));
          setSubmitting(false);
          resetForm();
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
          postal: Yup.number("Must be a number.")
            .min(5, "Must be 5 numbers")
            .max(5, "Must be 5 numbers")
            .typeError("A number is required")
            .required("Postal is required."),
          birth_date: Yup.date("Must be a date")
            .min(new Date(2000, 0, 1))
            .max(new Date())
            .typeError("A valid date is required")
            .required("Birthdate is required."),
        })}
      >
        {(formik) => (
          <Form>
            <UserDetails>
              <div>
                <InputBox
                  className={formik.touched.username && !formik.errors.username ? "is-valid" : ""}
                  type='text'
                  id='username'
                  name='username'
                  placeholder='Username'
                />
                {formik.touched.username && formik.errors.username ? (
                  <span className='text-warning'>{formik.errors.username}</span>
                ) : null}
              </div>
              <div>
                <InputBox
                  className={formik.touched.password && !formik.errors.password ? "is-valid" : ""}
                  type='password'
                  id='password'
                  name='password'
                  placeholder='Password'
                  autoComplete='off'
                />
                {formik.touched.password && formik.errors.password ? (
                  <span className='text-warning'>{formik.errors.password}</span>
                ) : null}
              </div>
              <div>
                <InputBox
                  className={
                    formik.touched.first_name && !formik.errors.first_name ? "is-valid" : ""
                  }
                  type='text'
                  id='first_name'
                  name='first_name'
                  placeholder='First name'
                />
                {formik.touched.first_name && formik.errors.first_name ? (
                  <span className='text-warning'>{formik.errors.first_name}</span>
                ) : null}
              </div>
              <div>
                <InputBox
                  className={formik.touched.last_name && !formik.errors.last_name ? "is-valid" : ""}
                  type='text'
                  id='last_name'
                  name='last_name'
                  placeholder='Last name'
                />
                {formik.touched.last_name && formik.errors.last_name ? (
                  <span className='text-warning'>{formik.errors.last_name}</span>
                ) : null}
              </div>
              <div>
                <InputBox
                  className={formik.touched.address && !formik.errors.address ? "is-valid" : ""}
                  type='text'
                  id='address'
                  name='address'
                  placeholder='Address'
                />
                {formik.touched.address && formik.errors.address ? (
                  <span className='text-warning'>{formik.errors.address}</span>
                ) : null}
              </div>
              <div>
                <InputBox
                  className={formik.touched.email && !formik.errors.email ? "is-valid" : ""}
                  type='email'
                  id='email'
                  name='email'
                  placeholder='Email'
                />
                {formik.touched.email && formik.errors.email ? (
                  <span className='text-warning'>{formik.errors.email}</span>
                ) : null}
              </div>
              <div>
                <InputBox
                  className={formik.touched.email && !formik.errors.email ? "is-valid" : ""}
                  type='text'
                  id='postal'
                  name='postal'
                  placeholder='Postal Code'
                />
                {formik.touched.postal && formik.errors.postal ? (
                  <span className='text-warning'>{formik.errors.postal}</span>
                ) : null}
              </div>
              <div>
                <InputBox
                  className={
                    formik.touched.birth_date && !formik.errors.birth_date ? "is-valid" : ""
                  }
                  type='text'
                  id='birth_date'
                  name='birth_date'
                  placeholder='Date of Birth'
                />
                {formik.touched.birth_date && formik.errors.birth_date ? (
                  <span className='text-warning'>{formik.errors.birth_date}</span>
                ) : null}
              </div>
            </UserDetails>
            <ContinueButton type='submit' disabled={formik.isSubmitting}>
              {formik.isSubmitting ? "Please wait..." : "Sign Up"}
            </ContinueButton>
          </Form>
        )}
      </Formik>
    </Container>
  );
}
