import React, { useState } from "react";
import { FormOuterDiv } from "../signInForm";
import { SignupComponent } from "./signupComponent/SignupComponent";
import { SignInForm } from "../signInForm/signupComponent";

function GuestSignup() {
  const [typeOfLogin, setTypeOfLogin] = useState(false);
  return (
    <FormOuterDiv>
      {typeOfLogin ? (
        <>
          <h1>SIGN UP AS A GUEST</h1>
          <p>
            If your are already a member sign in
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
            <strong onClick={() => setTypeOfLogin(!typeOfLogin)}>here</strong>
          </p>
          <SignupComponent />
        </>
      ) : (
        <>
          <h1>SIGN IN AS A MEMBER</h1>
          <p>
            If you want to continue as a guest press{" "}
            {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events */}
            <strong aria-details='button' onClick={() => setTypeOfLogin(!typeOfLogin)}>
              here
            </strong>
          </p>

          <SignInForm isInModal />
        </>
      )}
    </FormOuterDiv>
  );
}

export { GuestSignup };
