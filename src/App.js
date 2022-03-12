import "./App.css";

import React from "react";
import { Routes, Route } from "react-router-dom";
import { Reservation } from "./components/reservation";
import { FormContainer } from "./components/formContainer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<FormContainer />} />
        <Route path="/users/:username/reservation" element={<Reservation />} />
      </Routes>
    </div>
  );
}

export default App;
