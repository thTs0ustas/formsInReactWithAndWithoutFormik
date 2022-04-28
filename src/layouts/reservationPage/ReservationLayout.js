import React from "react";
import { Header, Nav, NavDiv, SignUpBar } from "../../theme";
import { ReservationContainer } from "./styledComponents/styles";
import { Reservation, Switch } from "../../components";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/NavBar";
import { SignupBarPart } from "../GlobalParts/SignupBarPart";

function ReservationLayout() {
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
      <ReservationContainer>
        <Reservation />
      </ReservationContainer>

      <Footer />
    </>
  );
}
export { ReservationLayout };
