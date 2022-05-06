import React from "react";
import { Header, Nav, NavDiv, SignUpBar } from "../../theme";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/NavBar";
import { SignupBarPart } from "../GlobalParts/SignupBarPart";
import { TitleHeader } from "../../components/moviesOfTheMonth/styledComponents/styles";
import { Switch, UpcomingMovies } from "../../components";

function UpcomingLayout() {
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
          <span>UPCOMING</span>
        </h2>
      </TitleHeader>

      <UpcomingMovies />

      <Footer />
    </>
  );
}
export { UpcomingLayout };
