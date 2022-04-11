import React from "react";
import { Header, Nav, NavDiv, SignUpBar } from "../../theme";
import { Switch } from "../../components";
import NavBar from "../../components/NavBar";
import { SignupBarPart } from "../GlobalParts/SignupBarPart";
import { MainPhoto, MainText } from "../../components";
import Footer from "../../components/footer/Footer";

const MoviePageLayout = () => {
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
      <div>
        <MainPhoto />
        <MainText />
      </div>

      <Footer />
    </>
  );
};

export { MoviePageLayout };
