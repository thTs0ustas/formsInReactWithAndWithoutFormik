// import react, {useState ,useEffect} from  'react';

import { Header, Nav, NavDiv, SignUpBar } from "../../theme";
import NavBar from "../../components/NavBar";
import { SignupBarPart } from "../GlobalParts/SignupBarPart";
import React, {useState}  from 'react';
import SideDiv from './sidebar/sidebar';
import Form from './UserForm/UserForm';
import History from './history/history';
import "bootstrap/dist/css/bootstrap.min.css";


import Footer from '../../components/footer/Footer';
import { Section, InfoSidebar, InfoMain, GridWrapper } from './styles/infoElements';

 // const [{username, token, id}] = useProvider(["userInfo.username", "userInfo.token", "userInfo.id"])
    
    // const [state] = useProvider()
    // console.log(state.userInfo)

let username = window.sessionStorage.getItem("username")

export const InfoPage = () => {  
  const [selected, setSelected] = useState('');
    
  const showSelectedOption = () => {
    switch(selected) {
      case 'history':
        return  <History />;
      case 'form':
        return  <Form />;
      
      default:
        return <Form />;
    }
  }

    return (
      <>
        <Header>
          <SignUpBar>
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

