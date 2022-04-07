import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Ticket } from "./components";
import { Payment } from "./components/payment/Payment";
import { HomePageLayout, ReservationLayout, SignInLayout } from "./layouts";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

// import { Navbar } from "react-bootstrap";

//Imports components for Homepage to see them rendered

import NavBar from "./components/NavBar";
import CarouselHero from "./components/HeroSlider";
import { PromoCards } from "./components/Promos";
//delete
import { SignUpBar, SignUpButton , SignInButton } from "./theme";
//delete
import { useNavigate } from "react-router-dom";




function App() {
  const [theming, setTheming] = useState(true);
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={theming ? theme.light : theme.dark}>
      <input type='checkbox' onChange={() => setTheming(!theming)}></input>
      <div className='App'>
        <Routes>
          <Route path='/' element={<HomePageLayout />} />
          <Route path='/login' element={<SignInLayout />} />
          <Route path='/payments' element={<Payment />} />
          <Route path='/payments/payment_success' element={<Ticket />} />
          <Route path='/payments/payment_cancel' element={<div>Cancel</div>} />
          <Route path='/reservation' element={<ReservationLayout />} />

        </Routes>

      </div>
    </ThemeProvider>
  );
}

export default App;
