import React from "react";
import { NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { NavDropdownDiv } from "../homePage/styledComponents/styles";
import { SignInButton, SignUpButton } from "../../theme";
import { selectors, useProvider, userLogoutAction } from "../../model";
import axios from "axios";

export const SignupBarPart = () => {
  const [
    {
      BASE_URL,
      userInfo: { token, isMember, username, isAdmin },
    },
    dispatch,
  ] = useProvider([selectors.url, selectors.userInfo]);
  const navigate = useNavigate();

  const loginOut = () => {
    axios
      .post(
        `${BASE_URL}/users/logout`,
        { username },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then(() => {
        navigate("/");
      })
      .catch((e) => alert(e.message));
  };

  return !username ? (
    <>
      <SignUpButton onClick={() => navigate("/signup")}>Sign Up</SignUpButton>
      <SignInButton onClick={() => navigate("/login")}>Sign In</SignInButton>
    </>
  ) : (
    <NavDropdownDiv title={username} id='nav-dropdown'>
      {isMember && (
        <>
          <NavDropdown.Item onClick={() => navigate("/info")} eventKey='4.1'>
            Info
          </NavDropdown.Item>

          {isAdmin && (
            <NavDropdown.Item onClick={() => navigate("/admin")} eventKey='4.1'>
              Admin
            </NavDropdown.Item>
          )}
          <NavDropdown.Divider />
        </>
      )}
      <NavDropdown.Item
        eventKey='4.2'
        onClick={() => {
          dispatch(userLogoutAction());
          loginOut();
          navigate("/");
        }}
      >
        Sign Out
      </NavDropdown.Item>
    </NavDropdownDiv>
  );
};
