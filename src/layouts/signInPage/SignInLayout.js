import React from "react";
import { LoginForm } from "../../components";
import { Login, SignInMain, Wrapper } from "./styles";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import {
  Footer,
  Header,
  Nav,
  NavDiv,
  NavItem,
  SignInButton,
  SignInDiv,
  SignUpBar,
  SignUpButton,
} from "../../theme";

const SignInLayout = () => {
  const navigate = useNavigate();
  return (
    <SignInDiv>
      <Header>
        <SignUpBar>
          <Container fluid className='d-flex p-0 justify-content-end'>
            <SignUpButton>Sign Up</SignUpButton>
            <SignInButton onClick={() => navigate("/login")}>Sign In</SignInButton>
          </Container>
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
