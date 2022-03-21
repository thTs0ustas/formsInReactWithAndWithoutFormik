import React, { useState } from "react";

import { LoginForm } from "../form";
import styled from "styled-components";

const Login = styled.div`
  margin: 0 auto;
  text-align: left;
  padding: 0 1vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 450px;
`;

export const FormContainer = () => (
  <Login>
    <LoginForm />
  </Login>
);
