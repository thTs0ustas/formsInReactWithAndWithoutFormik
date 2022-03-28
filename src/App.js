import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import { Ticket } from "./components";
import { HomePageLayout, ReservationLayout, SignInLayout } from "./layouts";

import "./App.css";

import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

function App() {
  const [theming, setTheming] = useState(true);
  return (
    <ThemeProvider theme={theming ? theme.light : theme.dark}>
      <input type='checkbox' onChange={() => setTheming(!theming)}></input>
      <div className='App'>
        <Routes>
          <Route exact path='/' element={<HomePageLayout />} />
          <Route path='/login' element={<SignInLayout />} />
          <Route path='/users/:username/reservation' element={<ReservationLayout />} />
          <Route path='/users/:username/reservation/ticket' element={<Ticket />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
