import React, { useState } from "react";
import { FormOuterDiv } from "../signInForm";
import { SignupComponent } from "./signupComponent/SignupComponent";
import { SignInForm } from "../signInForm/signupComponent";

const GuestSignup = () => {
  const [typeOfLogin, setTypeOfLogin] = useState(false);
  return (
    <FormOuterDiv>
      {typeOfLogin ? (
        <>
          <h1>SIGN UP AS A GUEST</h1>
          <p>
            If your are already a member sign in{" "}
            <strong onClick={() => setTypeOfLogin(!typeOfLogin)}>here</strong>
          </p>
          <SignupComponent />
        </>
      ) : (
        <>
          <h1>SIGN IN AS A MEMBER</h1>
          <p>
            If you want to continue as a guest press{" "}
            <strong onClick={() => setTypeOfLogin(!typeOfLogin)}>here</strong>
          </p>

          <SignInForm isInModal={true} />
        </>
      )}
    </FormOuterDiv>
  );
};

export { GuestSignup };
