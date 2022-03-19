import React, { useState } from "react";

import { ContactUsForm, FormLogin } from "../form";

export const FormContainer = () => {
  const [type, setType] = useState(true);

  return (
    <div>
      <div className="text-center container-fluid d-flex flex-column justify-content-center align-items-center w-100">
        <div className="text-center  m-2 form-check form-switch">
          <input
            onChange={() => setType(!type)}
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            checked={type}
            aria-checked={type}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Toggle this to switch form
          </label>
        </div>
        {type ? <ContactUsForm /> : <FormLogin />}
      </div>
    </div>
  );
};
