import React from "react";
import { Header, Nav, NavDiv, SignUpBar } from "../../theme";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/NavBar";
import { SignupBarPart } from "../GlobalParts/SignupBarPart";
import { TitleHeader } from "../../components/moviesOfTheMonth/styledComponents/styles";
import { NowShowingMovies } from "../../components/nowShowingMovies/NowShowingMovies";
import { Switch } from "../../components";

function NowShowingLayout() {
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
      <TitleHeader>
        <h2>
          <span>NOW PLAYING</span>
        </h2>
      </TitleHeader>

      <NowShowingMovies />

      <Footer />
    </>
  );
}
export { NowShowingLayout };
