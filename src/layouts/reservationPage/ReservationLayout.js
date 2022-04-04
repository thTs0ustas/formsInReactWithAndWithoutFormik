import { Footer, Header, Logo, Nav, NavDiv } from "../../theme";
import { MoviePoster, ReservationContainer } from "./styledComponents/styles";
import React from "react";
import { Reservation } from "../../components";

const ReservationLayout = () => {
  // const [movie, setMovie] = useProvider(["reservation.inputValues.movie"]);
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
