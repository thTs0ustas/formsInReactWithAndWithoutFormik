import React from "react";
import { Header, Nav, NavDiv, SignUpBar } from "../../theme";
import { MoviePageContainer, Switch } from "../../components";
import NavBar from "../../components/NavBar";
import { SignupBarPart } from "../GlobalParts/SignupBarPart";
import Footer from "../../components/footer/Footer";

function MoviePageLayout() {
  return (
    <>
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
      <MoviePageContainer />
      <Footer />
    </>
  );
}

export { MoviePageLayout };
