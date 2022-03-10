import "./App.css";
import { FormLogin, ContactUsForm } from "./components/form";
import React, { useState } from "react";

function App() {
  const [type, setType] = useState(true);
  return (
    <div className="App">
      <div className="container d-flex flex-column align-items-md-center">
        <div className="w-25 m-2 form-check form-switch">
          <input
            onChange={() => setType(!type)}
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            checked={type}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Toggle this to switch form
          </label>
        </div>
        {type ? <FormLogin /> : <ContactUsForm />}
      </div>
    </div>
  );
}

export default App;
