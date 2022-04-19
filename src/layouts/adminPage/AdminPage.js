import { Header, SignUpBar } from "../../theme";
import { Switch } from "../../components";
import { SignupBarPart } from "../GlobalParts/SignupBarPart";
import React, { useEffect, useState } from "react";
import { Tabs } from "react-bootstrap";
import { ShowMovies } from "../../components/admin/movies/ShowMovies";
import { ShowUsers } from "../../components/admin/users/ShowUser";
import { TabsContainer } from "./styledComponents/TabsContainer";
import { selectors, useProvider } from "../../model";
import { useNavigate } from "react-router-dom";
import { handleError } from "../../model/actions";
import { TabStyled } from "./styledComponents/Tabs";
import { ShowScreenings } from "../../components/admin/screenings/ShowScreenings";

const AdminPage = () => {
  const [{ userInfo }, dispatch] = useProvider([selectors.userInfo]);
  const navigate = useNavigate();
  const [key, setKey] = useState("home");

  useEffect(() => {
    if (!userInfo.username && !userInfo.token && !userInfo.isAdmin) {
      dispatch(
        handleError({
          message: "Unauthorised Access",
          time: new Date().getTime(),
        })
      );
      navigate("/");
    }
  }, []);

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
          <TabStyled eventKey='home' title='Home'></TabStyled>
          <TabStyled eventKey='movies' title='Movies'>
            <ShowMovies eventK={key} />
          </TabStyled>
          <TabStyled eventKey='users' title='Users'>
            <ShowUsers eventK={key} />
          </TabStyled>

          <TabStyled eventKey='screenings' title='Screenings'>
            <ShowScreenings eventK={key} />
          </TabStyled>
          <TabStyled eventKey='moviesOfTheMonth' title='Movies Of The Month'></TabStyled>
        </Tabs>
      </TabsContainer>
    </>
  );
};

export { AdminPage };
