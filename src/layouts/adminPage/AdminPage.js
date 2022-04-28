import React, { useEffect, useState } from "react";
import { Tabs } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { Header, Nav, NavDiv, SignUpBar } from "../../theme";
import { Home, Switch } from "../../components";
import { SignupBarPart } from "../GlobalParts/SignupBarPart";
import { ShowMovies } from "../../components/admin/movies/ShowMovies";
import { ShowUsers } from "../../components/admin/users/ShowUser";
import { TabsContainer } from "./styledComponents/TabsContainer";
import { TabStyled } from "./styledComponents/Tabs";
import { ShowScreenings } from "../../components/admin/screenings/ShowScreenings";
import { ShowMoviesOfTheMonth } from "../../components/admin/moviesOfTheMonth/ShowMoviesOfTheMonth";
import NavBar from "../../components/NavBar";
import { clearAdmin, setError } from "../../rModel";

function AdminPage() {
  const dispatch = useDispatch();
  const { id, token, isAdmin } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const [key, setKey] = useState("home");

  useEffect(() => {
    if (!id && !token && !isAdmin) {
      const time = moment().format("HH:mm:ss");
      dispatch(setError({ message: `You are not logged in as admin.`, time }));
      navigate("/");
    }
    return () => {
      dispatch(clearAdmin());
    };
  }, [dispatch, navigate, isAdmin, token, id]);

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
          <TabStyled eventKey='movies' title='movies'>
            <ShowMovies eventK={key} />
          </TabStyled>
          <TabStyled eventKey='users' title='Users'>
            <ShowUsers eventK={key} />
          </TabStyled>

          <TabStyled eventKey='screenings' title='Screenings'>
            <ShowScreenings eventK={key} />
          </TabStyled>
          <TabStyled eventKey='moviesOfTheMonth' title='Movies Of The Month'>
            <ShowMoviesOfTheMonth eventK='moviesOfTheMonth' />
          </TabStyled>
        </Tabs>
      </TabsContainer>
    </>
  );
}

export { AdminPage };
