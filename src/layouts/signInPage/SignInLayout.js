import React from "react";
import { LoginForm } from "../../components";
import { Login, SignInMain, Wrapper } from "./styledComponents/styles";
import {
  Footer,
  Header,
  Nav,
  NavDiv,
  NavItem,
  SignInDiv,
  SignUpBar,
} from "../../theme";
import { SignupBarPart } from "../GlobalParts/SignupBarPart";

const SignInLayout = () => {
  const username = sessionStorage.getItem("username");
  return (
    <SignInDiv>
      <Header>
        <SignUpBar>
          <div>
            <SignupBarPart username={username} />
          </div>
        </SignUpBar>

        <NavDiv>
          <Nav>
            <NavItem>1</NavItem>
            <NavItem>2</NavItem>
            <NavItem>3</NavItem>
            <NavItem>4</NavItem>
            <NavItem>5</NavItem>
            <NavItem>6</NavItem>
            <NavItem>7</NavItem>
          </Nav>
        </NavDiv>
      </Header>
      <Wrapper />
      <SignInMain>
        <Login>
          <LoginForm />
        </Login>
      </SignInMain>
      <footer>
        <Footer />
      </footer>
    </SignInDiv>
  );
};

export { SignInLayout };
