import React from "react";
import { FormContainer } from "../../components/formContainer";
import {
  Header,
  SignUpBar,
  SignInButton,
  SignUpButton,
  Nav,
  NavItem,
  NavDiv,
  HomeDiv,
  Footer,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

const SignInLayout = () => {
  const navigate = useNavigate();
  return (
    <HomeDiv>
      <Header>
        <SignUpBar>
          <Container fluid className="d-flex p-0 justify-content-end">
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
      <main className="flex-grow-1 d-flex">
        <FormContainer />
      </main>
      <footer>
        <Footer />
      </footer>
    </HomeDiv>
  );
};

export default SignInLayout;
