import React from "react";
import { NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { NavDropdownDiv } from "../homePage/styledComponents/styles";
import { SignInButton, SignUpButton } from "../../theme";

export const SignupBarPart = ({ username = null }) => {
  const navigate = useNavigate();
  return !username ? (
    <>
      <SignUpButton>Sign Up</SignUpButton>
      <SignInButton onClick={() => navigate("/login")}>Sign In</SignInButton>
    </>
  ) : (
    <NavDropdownDiv title={username} id='nav-dropdown'>
      <NavDropdown.Item eventKey='4.1'>Info</NavDropdown.Item>
      <NavDropdown.Item eventKey='4.1'>Reservations</NavDropdown.Item>
      <NavDropdown.Item eventKey='4.1'>Reviews</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item
        eventKey='4.2'
        onClick={() => {
          sessionStorage.removeItem("username");
          sessionStorage.removeItem("token");
          localStorage.clear();
          navigate("/");
          window.location.reload();
        }}
      >
        Sign Out
      </NavDropdown.Item>
    </NavDropdownDiv>
  );
};
