import { Header, Nav, NavDiv, SignUpBar } from "../../theme";
import { MoviePoster, ReservationContainer } from "./styledComponents/styles";
import React from "react";
import { Reservation, Switch } from "../../components";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/NavBar";
import { SignupBarPart } from "../GlobalParts/SignupBarPart";

const ReservationLayout = ({ username }) => {
  return (
    <>
      <Header>
        <SignUpBar>
          <Switch />
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
