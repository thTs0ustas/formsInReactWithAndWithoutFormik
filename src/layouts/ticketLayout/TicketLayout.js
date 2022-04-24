import React from "react";
import { Switch, Ticket } from "../../components";

import { Header, Nav, NavDiv, SignInDiv, SignUpBar } from "../../theme";
import Footer from "../../components/footer/Footer";
import { SignupBarPart } from "../GlobalParts/SignupBarPart";
import NavBar from "../../components/NavBar";
import { TicketContainer } from "./styledComponents/ticketContainer";
import { TitleHeader } from "../../components/moviesOfTheMonth/styledComponents/styles";

const TicketLayout = ({ username }) => {
  return (
    <SignInDiv>
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
      <TicketContainer>
        <TitleHeader>
          <h2>
            <span>Thank you for your purchase!</span>
          </h2>
        </TitleHeader>

        <div>
          <h3>Tickets</h3>
        </div>
        <div style={{ display: "flex" }}>
          <Ticket />
        </div>
      </TicketContainer>
      <Footer />
    </SignInDiv>
  );
};

export { TicketLayout };
