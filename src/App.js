import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import { Ticket } from "./components";
import { Payment } from "./components/payment/Payment";
import { HomePageLayout, ReservationLayout, SignInLayout } from "./layouts";

import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

function App() {
  const [theming, setTheming] = useState(true);
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
          <Route path='/users/:username/reservation' element={<ReservationLayout />} />
          <Route path='/users/:username/reservation/ticket' element={<Ticket />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
