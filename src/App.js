import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Ticket } from "./components";
import { Payment } from "./components/payment/Payment";
import {
  HomePageLayout,
  ReservationLayout,
  SignInLayout,
  TicketLayout,
} from "./layouts";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "./theme";
import { useProvider } from "./model";
import { useApp } from "./useApp";

function App() {
  const navigate = useNavigate();
  const [state] = useProvider(["theme"]);
  useApp();
  return (
    <ThemeProvider theme={state.theme ? theme.light : theme.dark}>
      <GlobalStyles />
      <div className='App'>
        <Routes>
          <Route path='/' element={<HomePageLayout />} />
          <Route path='/login' element={<SignInLayout />} />
          <Route path='/payments' element={<Payment />} />
          <Route path='/:username/tickets/new' element={<Ticket />} />
          <Route path='/ticket' element={<TicketLayout />} />
          <Route path='/payments/payment_cancel' element={<div>Cancel</div>} />
          <Route path='/reservation' element={<ReservationLayout />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
