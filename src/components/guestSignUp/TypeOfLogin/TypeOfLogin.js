import React from "react";
import PropTypes from "prop-types";
import { SignupComponent } from "../signupComponent/SignupComponent";

const propsGetter = (props) => ({
  "aria-label": "type of signup",
  "aria-details": "type of signup",
  onClick: props.onClick,
});

export function TypeOfLogin({ typeOfLogin, onClick }) {
  return (
    <>
      <h1>SIGN UP AS A {typeOfLogin ? "GUEST" : "MEMBER"}</h1>
      <p>
        {!typeOfLogin
          ? "If your are already a member sign in"
          : "If you want to continue as a guest press "}
        <strong {...propsGetter(onClick)}>here</strong>
      </p>
      <SignupComponent />
    </>
  );
}

TypeOfLogin.propTypes = {
  typeOfLogin: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
