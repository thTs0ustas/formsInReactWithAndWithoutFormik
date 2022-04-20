import React from "react";
import {
  Boundary,
  FormContainer,
  Full,
  Half,
  Input,
  SubscribeButton,
  Textarea,
} from "./styles/Footer.styled";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const navigate = useNavigate();
  const handleClick = (event) => {
    event.preventDefault();
    navigate("/contactUs");
  };
  return (
    <Boundary>
      <FormContainer>
        <Half>
          <Input required type='text' placeholder='Enter your first name' />
          <Input required type='text' placeholder='Enter your last name' />
        </Half>
        <Full>
          <Input required type='email' placeholder='Enter your email' />
        </Full>

        <Textarea required rows='14' placeholder='Your thoughts go here!' />

        <SubscribeButton onClick={handleClick} type='submit' value='send' />
      </FormContainer>
    </Boundary>
  );
}
