import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

// import { Reservation } from "./components/reservation";

import { Ticket } from "./components/ticket/ticket";
import { HomePageLayout, SignInLayout, ReservationLayout } from "./layouts";

import "./App.css";

import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

function App() {
  const [theming, setTheming] = useState(true);
  return (
    <ThemeProvider theme={theming ? theme.light : theme.dark}>
      TODO: switch for theme change
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePageLayout />} />
          <Route path="/login" element={<SignInLayout />} />
          <Route path="/users/:username/reservation" element={<ReservationLayout />} />
          <Route path="/users/:username/reservation/ticket" element={<Ticket />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
