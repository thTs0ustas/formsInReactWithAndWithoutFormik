import React from "react";
import { MainDiv, MainSection, StorySection } from "./styledComponents/style";
import { Wrapper } from "../signInPage/styledComponents/styles";
import { Header, Nav, NavDiv, SignUpBar } from "../../theme";
import Footer from "../../components/footer/Footer";
import { SignupBarPart } from "../GlobalParts/SignupBarPart";
import { AboutUsContent } from "../../components/aboutUs/AboutUsContent";
import { Switch } from "../../components";
import NavBar from "../../components/NavBar";
import { TitleHeader } from "../../components/moviesOfTheMonth/styledComponents/styles";

function AboutUsLayout() {
  return (
    <MainDiv>
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
      <MainSection>
        <TitleHeader>
          <h2>
            <span>ABOUT US</span>
          </h2>
        </TitleHeader>
        <div>
          <img src={require("../../assets/imgs/movie-theater.jpg")} alt='Cinema' />
        </div>
        <StorySection>
          <AboutUsContent />
        </StorySection>
      </MainSection>
      <footer>
        <Footer />
      </footer>
    </MainDiv>
  );
}

export { AboutUsLayout };
