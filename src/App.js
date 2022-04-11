import React from "react";
import { Route, Routes } from "react-router-dom";
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
import { ToastContainer } from "react-bootstrap";
import { AlertToast } from "./components/alertToast/Toast";

function App() {
  const [{ error, username, theme: theming }] = useProvider([
    "error",
    "theme",
    "userInfo.username",
  ]);

  return (
    <ThemeProvider theme={theming ? theme.light : theme.dark}>
      <GlobalStyles />
      <div className='App'>
        <Routes>
          <Route path='/' element={<HomePageLayout username={username} />} />
          <Route path='/login' element={<SignInLayout username={username} />} />
          <Route path='/payments' element={<Payment username={username} />} />
          <Route
            path='/:username/tickets/new'
            element={<Ticket username={username} />}
          />
          <Route
            path='/ticket'
            element={<TicketLayout username={username} />}
          />
          <Route path='/payments/payment_cancel' element={<div>Cancel</div>} />
          <Route
            path='/reservation'
            element={<ReservationLayout username={username} />}
          />
        </Routes>
      </div>
      <ToastContainer
        style={{ position: "sticky", zIndex: 10001 }}
        position={"top-end"}
      >
        {error && <AlertToast error={error} />}
      </ToastContainer>
    </ThemeProvider>
  );
}

export default App;
