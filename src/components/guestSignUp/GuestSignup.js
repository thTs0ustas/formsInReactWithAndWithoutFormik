import React, { useState } from "react";
import { FormOuterDiv } from "../signInForm";
import { TypeOfLogin } from "./TypeOfLogin/TypeOfLogin";

function GuestSignup() {
  const [typeOfLogin, setTypeOfLogin] = useState(false);
  const onClick = () => setTypeOfLogin(!typeOfLogin);
  return (
    <FormOuterDiv>
      <TypeOfLogin onClick={onClick} typeOfLogin={typeOfLogin} />
    </FormOuterDiv>
  );
}

export { GuestSignup };
