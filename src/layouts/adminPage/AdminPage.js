import { Header, SignUpBar } from "../../theme";
import { Switch } from "../../components";
import { SignupBarPart } from "../GlobalParts/SignupBarPart";
import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { ShowMovies } from "../../components/admin/movies/ShowMovies";
import { ShowUsers } from "../../components/admin/users/ShowUser";
import { TabsContainer } from "./styledComponents/TabsContainer";

const AdminPage = () => {
  const [key, setKey] = useState("home");
  return (
    <>
      <Header>
        <SignUpBar>
          <Switch />
          <div>
            <SignupBarPart />
          </div>
        </SignUpBar>
      </Header>
      <TabsContainer>
        <Tabs
          id='controlled-tab-example'
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className='mb-3'
        >
          <Tab eventKey='home' title='Home'></Tab>
          <Tab eventKey='movies' title='Movies'>
            <ShowMovies eventK={key} />
          </Tab>
          <Tab eventKey='users' title='Users'>
            <ShowUsers eventK={key} />
          </Tab>
          <Tab eventKey='cinemas' title='Cinemas'></Tab>
          <Tab eventKey='halls' title='Halls'></Tab>
          <Tab eventKey='screenings' title='Screenings'></Tab>
          <Tab eventKey='moviesOfTheMonth' title='Movies Of The Month'></Tab>
        </Tabs>
      </TabsContainer>
    </>
  );
};

export { AdminPage };
