import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { SocialDiv } from "./MobileButtonsEl";

function SocialMobile() {
  return (
    <SocialDiv>
      <BsFacebook />
      <BsInstagram />
      <BsTwitter />
    </SocialDiv>
  );
}

export default SocialMobile;
