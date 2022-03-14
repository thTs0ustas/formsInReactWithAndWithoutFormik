import "./App.css";

import React from "react";
import { Routes, Route } from "react-router-dom";
import { Reservation } from "./components/reservation";
import { FormContainer } from "./components/formContainer";
import { Ticket } from "./components/ticket/ticket";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<FormContainer />} />
        <Route path="/users/:username/reservation" element={<Reservation />} />
        <Route
          path="/users/:username/reservation/ticket"
          element={<Ticket />}
        />
      </Routes>
    </div>
  );
}

export default App;
