import { Header, Logo, Nav, NavDiv } from "../../theme";
import { MoviePoster, ReservationContainer } from "./styledComponents/styles";
import React from "react";
import { Reservation } from "../../components";
import Footer from "../../components/footer/Footer";

const ReservationLayout = () => {
  return (
    <>
      <Header>
        <NavDiv>
          <Nav>
            <Logo>Logo</Logo>
          </Nav>
        </NavDiv>
      </Header>
      <ReservationContainer>
        <MoviePoster />
        <Reservation />
      </ReservationContainer>
      <Footer />
    </>
  );
};
export { ReservationLayout };
