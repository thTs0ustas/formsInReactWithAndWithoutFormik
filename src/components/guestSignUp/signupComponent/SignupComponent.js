import React from "react";
import { Form, Formik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { InputField } from "../../../theme";
import { ContinueButton } from "../../signUpForm/styledComponents/styles";
import { useGuestSignup } from "../hooks/useGuestSignup";

const SignupComponent = () => {
  const { state, setState } = useGuestSignup();
  return (
    <Formik
      initialValues={{ first_name: "", last_name: "", email: "" }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        axios
          .post("http://localhost:4000/users/guest", {
            first_name: values.first_name,
            last_name: values.last_name,
            email: values.email,
          })
          .then((res) => {
            resetForm();
            setState(res.data);
          })
          .then(() => setSubmitting(false));
      }}
      validationSchema={Yup.object({
        first_name: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("First name is required"),
        last_name: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Last name is required"),
        email: Yup.string().email().required("Email is required"),
      })}
    >
      {(formik) => (
        <Form className='w-100'>
          <div>
            <InputField
              id='first_name'
              name='first_name'
              placeholder='First name'
              className={`  d-inline-block
                  ${
                    formik.touched.first_name && formik.errors.first_name
                      ? "form-control is-invalid"
                      : "form-control"
                  }`}
              type='text'
            />
            {formik.touched.first_name && formik.errors.first_name ? (
              <div className='invalid-feedback text-black fw-bold '>
                {formik.errors.first_name}
              </div>
            ) : null}
          </div>

          <div>
            <InputField
              id='last_name'
              name='last_name'
              placeholder='Last name'
              className={`  d-inline-block
                  ${
                    formik.touched.last_name && formik.errors.last_name
                      ? "form-control is-invalid"
                      : "form-control"
                  }`}
              type='text'
            />
            {formik.touched.last_name && formik.errors.last_name ? (
              <div className='invalid-feedback text-black fw-bold '>
                {formik.errors.last_name}
              </div>
            ) : null}
          </div>
          <div>
            <InputField
              id='email'
              name='email'
              placeholder='Email'
              className={`  d-inline-block
                  ${
                    formik.touched.email && formik.errors.email
                      ? "form-control is-invalid"
                      : "form-control"
                  }`}
              type='text'
            />
            {formik.touched.email && formik.errors.email ? (
              <div className='invalid-feedback text-black fw-bold '>
                {formik.errors.email}
              </div>
            ) : null}
          </div>
          <ContinueButton type='submit' disabled={formik.isSubmitting}>
            {formik.isSubmitting ? "Please wait..." : "Continue"}
          </ContinueButton>
        </Form>
      )}
    </Formik>
  );
};

export { SignupComponent };
