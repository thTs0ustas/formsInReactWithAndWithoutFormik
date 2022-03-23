import { Header, Footer, Logo, NavDiv, Nav } from "../../theme";
import { ReservationContainer, MoviePoster } from "./styles";
import React from "react";
import { Reservation } from "../../components/reservation";

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
      <MoviePoster></MoviePoster>
      <ReservationContainer>
        <Reservation />
      </ReservationContainer>
      <Footer></Footer>
    </>
  );
};
export { ReservationLayout };
