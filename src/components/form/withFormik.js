import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";

import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { useProvider } from "../../model";
import { actionTypes } from "../../model";
import { Input, Button, FormOuterDiv } from "./styles";

export const LoginForm = () => {
  const [state, setState] = useState(null);
  const [, dispatch] = useProvider();
  let navigate = useNavigate();

  useEffect(() => {
    if (window.sessionStorage.getItem("token")) {
      const username = window.sessionStorage.getItem("username");
      // overkill
      dispatch({
        type: actionTypes.userLogin,
        payload: { username: username, token: window.sessionStorage.getItem("token") },
      });
      username && navigate(`/users/${username}/reservation`);
    }

    if (state && state.accessToken && state.username) {
      window.sessionStorage.setItem("token", state.accessToken);
      window.sessionStorage.setItem("username", state.username);
      dispatch({
        type: actionTypes.userLogin,
        payload: { username: state.username, token: state.accessToken },
      });
      navigate(`/users/${state.username}/reservation`);
    }
  }, [state]);

  console.log(state);
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
          <Form className="w-100">
            <div>
              <Input
                id="username"
                name="username"
                placeholder="Username"
                className={`  d-inline-block
                  ${
                    formik.touched.username && formik.errors.username
                      ? "form-control is-invalid"
                      : "form-control"
                  }`}
                type="text"
              />
              {formik.touched.username && formik.errors.username ? (
                <div className="invalid-feedback text-black fw-bold ">{formik.errors.username}</div>
              ) : null}
            </div>

            <div>
              <Input
                id="password"
                name="password"
                placeholder="Password"
                className={`  d-inline-block 
                  ${
                    formik.touched.username && formik.errors.username
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  `}
                type="password"
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="invalid-feedback text-black fw-bold">{formik.errors.password}</div>
              ) : null}
            </div>

            <Button type="submit" disabled={formik.isSubmitting}>
              {formik.isSubmitting ? "Please wait..." : "Continue"}
            </Button>
          </Form>
        )}
      </Formik>
      <div>{state ? (state.message ? state.message : null) : ""}</div>
    </FormOuterDiv>
  );
};
