import React from "react";
import { NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

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
        sessionStorage.removeItem("username");
        sessionStorage.removeItem("token");
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
          <NavDropdown.Item eventKey='4.1'>Info</NavDropdown.Item>

          {isAdmin && (
            <NavDropdown.Item eventKey='4.1'>
              <Link to={"/admin"}>Admin</Link>
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
        }}
      >
        Sign Out
      </NavDropdown.Item>
    </NavDropdownDiv>
  );
};
