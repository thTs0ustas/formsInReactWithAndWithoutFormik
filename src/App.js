import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Reservation } from "./components/reservation";
import { Ticket } from "./components/ticket/ticket";
import HomePageLayout from "./layouts/homePage/homePageLayout";

import "./App.css";
import SignInLayout from "./layouts/signInPage/SignInLayout";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
// import { Navbar } from "react-bootstrap";

//Imports components for Homepage to see the rendered
 
import NavBar from "./components/NavBar";
import CarouselHero from "./components/HeroSlider";
//delete
import { SignUpBar, SignUpButton , SignInButton } from "./theme";
//delete
import { useNavigate } from "react-router-dom";



function App() {
  const [theming, setTheming] = useState(true);
  //delete
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={theming ? theme.light : theme.dark}>
      {/* TODO: switch for theme change */}
      <div className="App">
        {/* <Routes>
          <Route exact path="/" element={<HomePageLayout />} />
          <Route path="/login" element={<SignInLayout />} />
          <Route path="/nav" element={<NavBar />} />
          <Route path="/users/:username/reservation" element={<Reservation />} />
          <Route path="/users/:username/reservation/ticket" element={<Ticket />} />
        </Routes> */}
        
        <SignUpBar>
          <div>
            <SignUpButton>Sign Up</SignUpButton>
            <SignInButton onClick={() => navigate("/login")}>Sign In</SignInButton>
          </div>
        </SignUpBar>
        <NavBar /> 
        <CarouselHero />
        
      </div>
    </ThemeProvider>
  );
}

export default App;
