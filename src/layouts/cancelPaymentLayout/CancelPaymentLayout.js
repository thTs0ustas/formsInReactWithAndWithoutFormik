import React from "react";
import { Header, Nav, NavDiv, SignUpBar } from "../../theme";

import { SimpleMessage, Switch } from "../../components";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/NavBar";
import { SignupBarPart } from "../GlobalParts/SignupBarPart";

function CancelPaymentLayout() {
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
      <SimpleMessage message='You canceled your payment!' />
      <Footer />
    </>
  );
}

export { CancelPaymentLayout };
