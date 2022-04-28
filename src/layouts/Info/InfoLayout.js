import React, { useState } from "react";
import { Form } from "./UserForm/UserForm";
import { Header, Nav, NavDiv, SignUpBar } from "../../theme";
import NavBar from "../../components/NavBar";
import { SignupBarPart } from "../GlobalParts/SignupBarPart";
import SideDiv from "./sidebar/sidebar";
import History from "./history/history";
import "bootstrap/dist/css/bootstrap.min.css";

import Footer from "../../components/footer/Footer";
import { GridWrapper, InfoMain, InfoSidebar, Section } from "./styles/infoElements";
import { Switch } from "../../components";

export function InfoPage() {
  const [selected, setSelected] = useState("");

  const showSelectedOption = () => {
    switch (selected) {
      case "history":
        return <History />;
      case "form":
        return <Form />;

      default:
        return <Form />;
    }
  };

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
      <Section>
        <GridWrapper>
          <InfoSidebar>
            <SideDiv setSelected={setSelected} />
          </InfoSidebar>
          <InfoMain>
            <div>{showSelectedOption()} </div>
          </InfoMain>
        </GridWrapper>
      </Section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
