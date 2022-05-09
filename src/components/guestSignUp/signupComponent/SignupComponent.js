import React, { useState } from "react";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { InputError, InputField, InputFieldContainer } from "../../../theme";
import { ContinueButton } from "../../signInForm";
import addGuestUserAction from "../actions/addGuestUserAction";
import { useGuestSignup } from "../hooks/useGuestSignup";

function SignupComponent() {
  const dispatch = useDispatch();
  const [error] = useState("");
  const { id } = useParams();

  useGuestSignup(id);
  return (
    <Formik
      initialValues={{ first_name: "", last_name: "", email: "" }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        dispatch(
          addGuestUserAction({
            first_name: values.first_name,
            last_name: values.last_name,
            email: values.email,
          })
        );

        resetForm();
        setSubmitting(false);
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
          <InputFieldContainer>
            <InputField
              id='first_name'
              name='first_name'
              placeholder='First name'
              type='text'
              className={formik.touched.first_name && formik.errors.first_name && "is-invalid"}
            />
            {formik.touched.first_name && formik.errors.first_name ? (
              <InputError>{formik.errors.first_name}</InputError>
            ) : error ? (
              <InputError>{error}</InputError>
            ) : null}
          </InputFieldContainer>

          <InputFieldContainer>
            <InputField
              id='last_name'
              name='last_name'
              placeholder='Last name'
              type='text'
              className={formik.touched.first_name && formik.errors.first_name && "is-invalid"}
            />
            {formik.touched.last_name && formik.errors.last_name ? (
              <InputError>{formik.errors.last_name}</InputError>
            ) : error ? (
              <InputError>{error}</InputError>
            ) : null}
          </InputFieldContainer>

          <InputFieldContainer>
            <InputField
              id='email'
              name='email'
              placeholder='Email'
              type='text'
              className={formik.touched.first_name && formik.errors.first_name && "is-invalid"}
            />
            {formik.touched.email && formik.errors.email ? (
              <InputError>{formik.errors.email}</InputError>
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
}

export { SignupComponent };
