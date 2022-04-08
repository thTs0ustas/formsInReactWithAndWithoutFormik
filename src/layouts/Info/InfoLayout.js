import react from  'react';
//imports from other parts of the website
import NavBar from '../../components/NavBar';
import { Header } from '../../theme';
import Footer from '../../components/footer/Footer';
import { Section, InfoSidebar, InfoMain, GridWrapper } from './styles/infoElements';
// import { SignUpBar } from '../../theme';
// import { SignupBarPart } from '../GlobalParts/SignupBarPart';
export const InfoPage = () => {
    const username = sessionStorage.getItem("username");
    return (
      <>
        <Section>
          <GridWrapper>
            <InfoSidebar></InfoSidebar>
            <InfoMain>
              <h1>this is the infoPage</h1>
            </InfoMain>
          </GridWrapper>
        </Section>
        <footer>
          <Footer />
        </footer>
      </>
    );
}

