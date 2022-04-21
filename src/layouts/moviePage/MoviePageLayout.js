import React from "react";
import { Header, Nav, NavDiv, SignUpBar } from "../../theme";
import { Switch } from "../../components";
import NavBar from "../../components/NavBar";
import { SignupBarPart } from "../GlobalParts/SignupBarPart";
import Footer from "../../components/footer/Footer";
import MoviePageContainer from "../../components/moviePage/MoviePageContainer";

const MoviePageLayout = ({ id }) => {
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
      <MoviePageContainer id={id} />
      <Footer />
    </>
  );
};

export { MoviePageLayout };
