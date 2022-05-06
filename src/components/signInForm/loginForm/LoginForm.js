import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { FormOuterDiv } from "../styledComponents";
import { SignInForm } from "../signupComponent";

export function LoginForm() {
  return (
    <FormOuterDiv>
      <h1>MOVIE CLUB SIGN IN</h1>
      <p>Please enter your username and password to continue.</p>
      <SignInForm isInModal />
    </FormOuterDiv>
  );
}
