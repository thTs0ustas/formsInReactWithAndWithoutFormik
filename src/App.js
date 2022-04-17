import React from "react";
import { Route, Routes } from "react-router-dom";
import { Payment } from "./components/payment/Payment";
import {
  AdminPage,
  CancelPaymentLayout,
  HomePageLayout,
  ReservationLayout,
  SignInLayout,
  ThanksForYourPaymentLayout,
  ThankYouForYourThoughts,
  TicketLayout,
} from "./layouts";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "./theme";
import { selectors, useProvider } from "./model";
import { ToastContainer } from "react-bootstrap";
import { AlertToast } from "./components/alertToast/Toast";
import { ShowMovies } from "./components/admin/movies/ShowMovies";

function App() {
  const [{ error, username, theme: theming }] = useProvider([
    selectors.error,
    selectors.username,
    selectors.theme,
  ]);

  return (
    <ThemeProvider theme={theming ? theme.light : theme.dark}>
      <GlobalStyles />
      <div className='App'>
        <Routes>
          <Route path='/'>
            <Route index element={<HomePageLayout username={username} />} />
            <Route path='login' element={<SignInLayout username={username} />} />
            <Route path='contactUs' element={<ThankYouForYourThoughts />} />
            <Route path='payments'>
              <Route index element={<Payment username={username} />} />
              <Route path='payment_cancel' element={<CancelPaymentLayout />} />
              <Route path='payment_applied' element={<ThanksForYourPaymentLayout />} />
            </Route>
            <Route path='/:username/tickets/new' element={<TicketLayout username={username} />} />
            <Route path='/reservation/:id' element={<ReservationLayout username={username} />} />
            <Route path='admin'>
              <Route index element={<AdminPage />} />
              <Route path='movies' element={<ShowMovies />} />
            </Route>
          </Route>
          {/*<Route path='/payments' element={<Payment username={username} />} />*/}
        </Routes>
      </div>
      <ToastContainer style={{ position: "sticky", zIndex: 10001 }} position={"top-end"}>
        {error && <AlertToast error={error} />}
      </ToastContainer>
    </ThemeProvider>
  );
}

export default App;
