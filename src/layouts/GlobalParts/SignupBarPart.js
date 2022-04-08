import React from "react";
import { NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { NavDropdownDiv } from "../homePage/styledComponents/styles";
import { SignInButton, SignUpButton } from "../../theme";
import { useProvider, userLogoutAction } from "../../model";
import axios from "axios";

export const SignupBarPart = ({ username = null }) => {
  const [{ userInfo, BASE_URL }, dispatch] = useProvider();
  const navigate = useNavigate();

  const loginOut = () => {
    axios
      .post(
        `${BASE_URL}/users/logout`,
        { username },
        {
          headers: {
            authorization: "Bearer " + userInfo.token,
          },
        }
      )
      .then(() => {
        sessionStorage.removeItem("username");
        sessionStorage.removeItem("token");
        navigate("/");
      });
  };

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
          dispatch(userLogoutAction());
          loginOut();
        }}
      >
        Sign Out
      </NavDropdown.Item>
    </NavDropdownDiv>
  );
};
