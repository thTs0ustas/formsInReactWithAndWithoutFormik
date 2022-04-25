import React, { useState } from "react";
import axios from "axios";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { InputError, InputField, InputFieldContainer } from "../../../theme";
import { ContinueButton } from "../../signInForm";
import { useGuestSignup } from "../hooks/useGuestSignup";
import { errorHandling } from "../errors/errorHandling";
import { selectors, useProvider } from "../../../model";

const SignupComponent = () => {
  const [{ BASE_URL }] = useProvider([selectors.url]);
  let [error, setError] = useState("");
  const { setState } = useGuestSignup();
  return (
    <Formik
      initialValues={{ first_name: "", last_name: "", email: "" }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        axios
          .post(`${BASE_URL}/users/guest`, {
            first_name: values.first_name,
            last_name: values.last_name,
            email: values.email,
          })
          .then((res) => {
            if (errorHandling(res.data)) {
              setError(res.data.message);
              resetForm();
            } else {
              resetForm();
              setState(res.data);
            }
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
};

export { SignupComponent };
