import React from "react";
import { Route, Routes } from "react-router-dom";
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

import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "./theme";
import { selectors, useProvider } from "./model";
import { ToastContainer } from "react-bootstrap";
import { AlertToast } from "./components/alertToast/Toast";
import { ShowMovies } from "./components/admin/movies/ShowMovies";
import { Subscription } from "./components/subscription/Subscription";
import { InfoPage } from "./layouts/Info";

import { NowShowingLayout } from "./layouts/nowShowingPage/NowShowingLayout";
import { UpcomingLayout } from "./layouts/upcomingPage/UpcomingLayout";
import { MoviesByGenreLayout } from "./layouts/moniesByGernePage/MoviesByGenreLayout";
import { useSelector } from "react-redux";

function App() {
  const [{ username, theme: theming }] = useProvider([selectors.username, selectors.theme]);
  const { error } = useSelector((state) => state);
  console.log(error);
  return (
    <ThemeProvider theme={theming ? theme.light : theme.dark}>
      <GlobalStyles />
      <div className='App'>
        <Routes>
          <Route path='/'>
            <Route index element={<HomePageLayout username={username} />} />
            <Route path='info/:username' element={<InfoPage username={username} />} />
            <Route path='nowPlaying' element={<NowShowingLayout username={username} />} />
            <Route path='ticketPrices' element={<TicketPricesLayout username={username} />} />
            <Route path='aboutUs' element={<AboutUsLayout username={username} />} />
            <Route path='movieByGenre'>
              <Route path=':genre' element={<MoviesByGenreLayout username={username} />} />
            </Route>
            <Route path='upcoming' element={<UpcomingLayout username={username} />} />
            <Route path='moviePage/:id' element={<MoviePageLayout username={username} />} />
            <Route path='login' element={<SignInLayout username={username} />} />
            <Route path='signup' element={<SignUpLayout username={username} />} />
            <Route path='contactUs' element={<ThankYouForYourThoughts username={username} />} />
            <Route path='payments'>
              <Route index element={<Payment username={username} />} />
              <Route path='payment_cancel' element={<CancelPaymentLayout username={username} />} />
              <Route
                path='payment_applied'
                element={<ThanksForYourPaymentLayout username={username} />}
              />
            </Route>
            <Route path='payments/subscription' element={<Subscription username={username} />} />
            <Route path='/:username/tickets/new' element={<TicketLayout username={username} />} />
            <Route path='/reservation/:id' element={<ReservationLayout username={username} />} />
            <Route path='admin'>
              <Route index element={<AdminPage username={username} />} />
              <Route path='movies' element={<ShowMovies username={username} />} />
            </Route>
          </Route>
        </Routes>
      </div>
      <ToastContainer style={{ position: "sticky", zIndex: 10001 }} position={"top-end"}>
        {error && <AlertToast error={error} />}
      </ToastContainer>
    </ThemeProvider>
  );
}

export default App;
