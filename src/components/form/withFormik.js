import React, { useEffect, useState } from "react";
import { Formik, Field, Form } from "formik";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const ContactUsForm = () => {
  const [state, setState] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    if (window.sessionStorage.getItem("token")) {
      const username = window.sessionStorage.getItem("username");
      username && navigate(`/users/${username}/reservation`);
    }

    if (state?.accessToken && state?.username) {
      const username = state?.username;
      const accessToken = state?.accessToken;

      window.sessionStorage.setItem("token", accessToken);
      window.sessionStorage.setItem("username", username);

      navigate(`/users/${username}/reservation`);
    }
  }, [state]);

  console.log(state);
  return (
    <>
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
          <Form className="w-100">
            <div>
              <label
                className="w-25 d-inline-block form-label"
                htmlFor="username"
              >
                Name:
              </label>
              <Field
                id="username"
                name="username"
                className={` w-25 d-inline-block
                  ${
                    formik.touched.username && formik.errors.username
                      ? "form-control is-invalid"
                      : "form-control"
                  }`}
                type="text"
              />
              {formik.touched.username && formik.errors.username ? (
                <div className=" invalid-feedback">
                  {formik.errors.username}
                </div>
              ) : null}
            </div>

            <div>
              <label
                className="form-label w-25 d-inline-block"
                htmlFor="password"
              >
                Password:
              </label>
              <Field
                id="password"
                name="password"
                className={` w-25 d-inline-block
                  ${
                    formik.touched.username && formik.errors.username
                      ? "form-control is-invalid"
                      : "form-control"
                  }`}
                type="password"
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="invalid-feedback">{formik.errors.password}</div>
              ) : null}
            </div>

            <br />
            <div>
              <Button type="submit" disabled={formik.isSubmitting}>
                {formik.isSubmitting ? "Please wait..." : "Submit"}
              </Button>

              <Button
                variant={"danger"}
                onReset={formik.handleReset}
                type="reset"
                disabled={formik.isSubmitting}
              >
                Reset
              </Button>
            </div>
          </Form>
        )}
      </Formik>
      <div>{state ? (state.message ? state.message : null) : ""}</div>
    </>
  );
};
