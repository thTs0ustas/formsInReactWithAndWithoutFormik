import { Header, Nav, NavDiv, SignUpBar } from "../../theme";
import { MoviePoster, ReservationContainer } from "./styledComponents/styles";
import React from "react";
import { Reservation } from "../../components";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/NavBar";
import { SignupBarPart } from "../GlobalParts/SignupBarPart";

const ReservationLayout = () => {
  const username = sessionStorage.getItem("username");
  return (
    <>
      <Header>
        <SignUpBar>
          <div>
            <SignupBarPart username={username} />
          </div>
        </SignUpBar>
        <NavDiv>
          <Nav>
            <NavBar />
          </Nav>
        </NavDiv>
      </Header>
      <ReservationContainer>
        <MoviePoster>
          <img src={require(`../../assets/imgs/batman.jpg`)} alt='poster' />
        </MoviePoster>
        <Reservation />
      </ReservationContainer>
      <Footer />
    </>
  );
};
export { ReservationLayout };
