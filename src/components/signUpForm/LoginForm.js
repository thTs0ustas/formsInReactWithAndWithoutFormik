import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { FormOuterDiv } from "./styledComponents/styles";
import { SignInForm } from "./signupComponent/SigninForm";

export const LoginForm = () => {
  return (
    <FormOuterDiv>
      <h1>MOVIE CLUB SIGN IN</h1>
      <p>Please enter your username and password to continue.</p>

      <SignInForm />
    </FormOuterDiv>
  );
};
