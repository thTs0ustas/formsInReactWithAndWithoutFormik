import React from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Payment } from "./components/payment/Payment";
import {
  AboutUsLayout,
  AdminPage,
  CancelPaymentLayout,
  HomePageLayout,
  MoviePageLayout,
  ReservationLayout,
  SignInLayout,
  ThanksForYourPaymentLayout,
  ThankYouForYourThoughts,
  TicketLayout,
  TicketPricesLayout,
} from "./layouts";

import SignUpLayout from "./layouts/signUpPage/SignUpLayout";

import { GlobalStyles, theme } from "./theme";
import { AlertToast } from "./components/alertToast/Toast";
import { Subscription } from "./components/subscription/Subscription";
import { InfoPage } from "./layouts/Info";

import { NowShowingLayout } from "./layouts/nowShowingPage/NowShowingLayout";
import { UpcomingLayout } from "./layouts/upcomingPage/UpcomingLayout";
import { MoviesByGenreLayout } from "./layouts/moviesByGernePage/MoviesByGenreLayout";

function App() {
  const {
    error,
    theme: { theme: themeStyle },
  } = useSelector((state) => state);

  return (
    <ThemeProvider theme={theme[themeStyle]}>
      <GlobalStyles />

      <div className='App'>
        <Routes>
          <Route path='/'>
            <Route index element={<HomePageLayout />} />
            <Route path='user/:id/info/' element={<InfoPage />} />
            <Route path='nowPlaying' element={<NowShowingLayout />} />
            <Route path='ticketPrices' element={<TicketPricesLayout />} />
            <Route path='aboutUs' element={<AboutUsLayout />} />
            <Route path='movieByGenre'>
              <Route path=':genre' element={<MoviesByGenreLayout />} />
            </Route>
            <Route path='upcoming' element={<UpcomingLayout />} />
            <Route path='moviePage/:id' element={<MoviePageLayout />} />
            <Route path='login' element={<SignInLayout />} />
            <Route path='signup' element={<SignUpLayout />} />
            <Route path='contactUs' element={<ThankYouForYourThoughts />} />
            <Route path='payments'>
              <Route index element={<Payment />} />
              <Route path='payment_cancel' element={<CancelPaymentLayout />} />
              <Route path='payment_applied' element={<ThanksForYourPaymentLayout />} />
            </Route>
            <Route path='payments/subscription' element={<Subscription />} />
            <Route path='/user/:id/tickets/new' element={<TicketLayout />} />
            <Route path='/reservation/:id' element={<ReservationLayout />} />
            <Route path='admin'>
              <Route index element={<AdminPage />} />
            </Route>
          </Route>
        </Routes>
      </div>
      <ToastContainer style={{ position: "sticky", zIndex: 10001 }} position='top-end'>
        {error.message && <AlertToast error={error} />}
      </ToastContainer>
    </ThemeProvider>
  );
}

export default App;
