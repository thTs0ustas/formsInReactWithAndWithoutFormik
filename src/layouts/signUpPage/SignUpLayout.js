import React from "react";
import { SignUp, SignUpMain, Wrapper } from "./styles";

import { Header, Nav, NavDiv, SignInDiv, SignUpBar } from "../../theme";
import { RegistrationForm } from "../../components/registrationForm/registrationForm";
import { Switch } from "../../components";
import { SignupBarPart } from "../GlobalParts/SignupBarPart";
import NavBar from "../../components/NavBar";
import Footer from "../../components/footer/Footer";

function SignInLayout() {
  return (
    <SignInDiv>
      <Header>
        <SignUpBar>
          <Switch />
          <div>
            <SignupBarPart />
          </div>
        </SignUpBar>

        <NavDiv>
          <Nav>
            <NavBar />
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
}

export default SignInLayout;
