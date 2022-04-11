import React from "react";
import {
  Boundary,
  FormContainer,
  Full,
  Half,
  Input,
  SubscribeButton,
} from "./styles/Footer.styled";

export default function Form() {
  return (
    <Boundary>
      <FormContainer>
        <Half>
          <Input type='text' placeholder='Enter your first name' />
          <Input type='text' placeholder='Enter your last name' />
        </Half>
        <Full>
          <Input type='email' placeholder='Enter your password' />
          <SubscribeButton type='submit' value='subscribe' />
        </Full>
      </FormContainer>
    </Boundary>
  );
}
