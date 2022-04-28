import React from "react";
import PropTypes from "prop-types";
import { Description, MobileDiv, SignIn, SignUp } from "./MobileButtonsEl";
import SocialMobile from "./SocialMedia";

function ButtonsDiv({ isOpen }) {
  return (
    <MobileDiv isOpen={isOpen}>
      <SocialMobile />
      <Description>Located At Neapoli 31, 11471</Description>
      <Description>211-800-80-800</Description>
      <SignIn>Login</SignIn>
      <SignUp>Join Us</SignUp>
    </MobileDiv>
  );
}
ButtonsDiv.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
export default ButtonsDiv;
