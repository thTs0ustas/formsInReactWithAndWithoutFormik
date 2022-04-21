import React from "react";
import { LogoImg } from "./LogoElement";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"}>
      <LogoImg src={require("../../../assets/imgs/retro-cinema.png")} />
    </Link>
  );
};

export default Logo;
