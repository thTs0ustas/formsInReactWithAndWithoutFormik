import React from "react";
import { Tabs } from "react-bootstrap";
import { Header, Nav, NavDiv, SignUpBar } from "../../theme";
import { Home, Switch } from "../../components";
import { SignupBarPart } from "../GlobalParts/SignupBarPart";
import {
  ShowMovies,
  ShowMoviesOfTheMonth,
  ShowScreenings,
  ShowUsers,
} from "../../components/admin";
import { TabsContainer } from "./styledComponents/TabsContainer";
import { TabStyled } from "./styledComponents/Tabs";
import NavBar from "../../components/NavBar";
import { useAdminPage } from "./hooks/useAdminPage";

function AdminPage() {
  const { key, setKey } = useAdminPage();

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
      <TabsContainer>
        <Tabs
          id='controlled-tab-example'
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className='mb-3'
        >
          <TabStyled eventKey='home' title='Home'>
            <Home />
          </TabStyled>
          <TabStyled eventKey='movies' title='Movies'>
            <ShowMovies eventK={key} />
          </TabStyled>
          <TabStyled eventKey='users' title='Users'>
            <ShowUsers eventK={key} />
          </TabStyled>

          <TabStyled eventKey='screenings' title='Screenings'>
            <ShowScreenings eventK={key} />
          </TabStyled>
          <TabStyled eventKey='moviesOfTheMonth' title='Movies Of The Month'>
            <ShowMoviesOfTheMonth eventK={key} />
          </TabStyled>
        </Tabs>
      </TabsContainer>
    </>
  );
}

export { AdminPage };
