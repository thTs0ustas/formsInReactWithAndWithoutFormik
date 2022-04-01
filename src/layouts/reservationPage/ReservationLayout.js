import { Footer, Header, Logo, Nav, NavDiv } from "../../theme";
import { MoviePoster, ReservationContainer } from "./styledComponents/styles";
import React from "react";
import { Reservation } from "../../components";

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
      <MoviePoster />
      <ReservationContainer>
        <Reservation />
      </ReservationContainer>
      <Footer />
    </>
  );
};
export { ReservationLayout };
