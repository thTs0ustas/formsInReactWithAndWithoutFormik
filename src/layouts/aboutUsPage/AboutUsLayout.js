import React from "react";
import { MainDiv, MainSection, StorySection } from "./styledComponents/style";
import { Wrapper } from "../signInPage/styledComponents/styles";
import { Header, SignUpBar, NavDiv, Nav, NavItem } from "../../theme";
import Footer from "../../components/footer/Footer";
import { SignupBarPart } from "../GlobalParts/SignupBarPart";
import { AboutUsContent } from "../../components/aboutUs/AboutUsContent";

const AboutUsLayout = () => {
  const username = sessionStorage.getItem("username");
  return (
    <MainDiv>
      <Header>
        <SignUpBar>
          <div>
            <SignupBarPart username={username} />
          </div>
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
      <MainSection>
        <h1>About us</h1>
        <div>
          <img
            src='https://classic.imgix.net/custom-pages/cameo-outside.png?auto=compress,format&w=1180&h=494&fit=crop&v=20220119'
            alt='Cinema'
          />
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
};

export { AboutUsLayout };
