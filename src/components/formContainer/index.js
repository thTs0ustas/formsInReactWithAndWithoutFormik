import React, { useState } from "react";
import { ContactUsForm, FormLogin } from "../form";

export const FormContainer = () => {
  const [type, setType] = useState(true);

  return (
    <div>
      <div className="text-center container d-flex flex-column align-items-md-center w-100">
        <div className=" w-50 m-2 form-check form-switch">
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
          {type ? <ContactUsForm /> : <FormLogin />}
        </div>
      </div>
    </div>
  );
};
