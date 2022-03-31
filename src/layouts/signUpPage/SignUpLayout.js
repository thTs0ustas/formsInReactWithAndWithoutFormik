import React from "react";
// import { LoginForm } from "../../components/form";
import { SignUp, SignUpMain, Wrapper } from "./styles";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import {
  Header,
  SignUpBar,
  SignInButton,
  SignUpButton,
  Nav,
  NavItem,
  NavDiv,
  SignInDiv,
  Footer,
} from "../../theme";
import { RegistrationForm } from "../../components/registrationForm/RegistrationForm";

const SignInLayout = () => {
  const navigate = useNavigate();
  return (
    <SignInDiv>
      <Header>
        <SignUpBar>
          <Container fluid className="d-flex p-0 justify-content-end">
            <SignUpButton onClick={() => navigate("/signup")}>Sign Up</SignUpButton>
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
      <SignUpMain>
        <SignUp>
          <RegistrationForm />
        </SignUp>
      </SignUpMain>
      <footer>
        <Footer />
      </footer>
    </SignInDiv>
  );
};

export default SignInLayout;
