import React from "react";
import { Link } from "react-router-dom";
import { LogoImg } from "./LogoElement";
import logo from "../../../assets/imgs/retro-cinema.png";

function Logo() {
  return (
    <Link to='/'>
      <LogoImg src={logo} />
    </Link>
  );
}

export default Logo;
