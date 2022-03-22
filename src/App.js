import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import { Reservation } from "./components/reservation";

import { Ticket } from "./components/ticket/ticket";
import HomePageLayout from "./layouts/homePage/homePageLayout";

import "./App.css";
import SignInLayout from "./layouts/signInPage/SignInLayout";
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
          <Route path="/users/:username/reservation" element={<Reservation />} />
          <Route path="/users/:username/reservation/ticket" element={<Ticket />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
