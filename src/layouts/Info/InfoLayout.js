// import react, {useState ,useEffect} from  'react';


import React, {useState}  from 'react';
import SideDiv from './sidebar/sidebar';
import Form from './UserForm/UserForm';
import History from './history/history';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from '../../components/NavBar'

import Footer from '../../components/footer/Footer';
import { Section, InfoSidebar, InfoMain, GridWrapper } from './styles/infoElements';



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

        <Section>
          <GridWrapper>
            <InfoSidebar>
              <SideDiv setSelected={setSelected}/>
              
            </InfoSidebar>
            <InfoMain>
              
                <div>
                  {showSelectedOption()}{" "}
                </div>
            </InfoMain>
          </GridWrapper>
        </Section>
        <footer>
          <Footer />
        </footer>
      </>
    );
}

