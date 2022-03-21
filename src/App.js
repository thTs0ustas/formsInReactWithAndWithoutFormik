import "./App.css";

import React from "react";
import { Route, Routes } from "react-router-dom";

import { Reservation } from "./components/reservation";
import { FormContainer } from "./components/formContainer";
import { Ticket } from "./components/ticket/ticket";
import HomePageLayout from "./layouts/homePage/homePageLayout";

import SeatMatrix from "./components/seatsGrid/seatsGrid";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePageLayout />} />
        <Route path="/login" element={<FormContainer />} />
        {/*<Route path="/seats" element={<SeatMatrix />} />*/}
        <Route path="/users/:username/reservation" element={<Reservation />} />
        <Route path="/users/:username/reservation/ticket" element={<Ticket />} />
      </Routes>
    </div>
  );
}

export default App;
