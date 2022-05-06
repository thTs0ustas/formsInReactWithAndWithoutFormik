import React from "react";
import { Link } from "react-router-dom";
import { Switch, Ticket } from "../../components";

import { Header, Nav, NavDiv, SignInDiv, SignUpBar } from "../../theme";
import Footer from "../../components/footer/Footer";
import { SignupBarPart } from "../GlobalParts/SignupBarPart";
import NavBar from "../../components/NavBar";
import { TicketContainer } from "./styledComponents/ticketContainer";
import { TitleHeader } from "../../components/moviesOfTheMonth/styledComponents/styles";
import { LinkToHome } from "../../components/simpleMessage/styledComponents/LinkToHome";

function TicketLayout() {
  return (
    <SignInDiv>
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
      <TicketContainer>
        <TitleHeader>
          <h2>
            <span>Thank you for your purchase!</span>
          </h2>
        </TitleHeader>
        <div style={{ marginBottom: 30 }}>
          <h3>Tickets</h3>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Ticket />
        </div>
        <div style={{ width: "100%" }}>
          <LinkToHome>
            <Link to='/'>Homepage</Link>
          </LinkToHome>
        </div>
      </TicketContainer>
      <Footer />
    </SignInDiv>
  );
}

export { TicketLayout };
