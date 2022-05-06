import React from "react";
import { Spinner } from "react-bootstrap";
import { usePayment } from "./hooks/usePayment";

export function Payment() {
  usePayment();

  return (
    <Spinner animation='border' role='status'>
      <span className='visually-hidden' />
    </Spinner>
  );
}
