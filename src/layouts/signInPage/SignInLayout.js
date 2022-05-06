import React from "react";
import { LoginForm, Switch } from "../../components";
import { Login, SignInMain, Wrapper } from "./styledComponents/styles";
import { Header, Nav, NavDiv, SignInDiv, SignUpBar } from "../../theme";
import Footer from "../../components/footer/Footer";
import { SignupBarPart } from "../GlobalParts/SignupBarPart";
import NavBar from "../../components/NavBar";

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
}

export { SignInLayout };
