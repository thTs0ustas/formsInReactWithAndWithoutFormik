import { Header, Nav, NavDiv, SignUpBar } from "../../theme";

import React from "react";
import { SimpleMessage, Switch } from "../../components";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/NavBar";
import { SignupBarPart } from "../GlobalParts/SignupBarPart";

const ThanksForYourPaymentLayout = ({ username }) => (
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
    <SimpleMessage message={"Thank you for your payment!"} />
    <Footer />
  </>
);

export { ThanksForYourPaymentLayout };
