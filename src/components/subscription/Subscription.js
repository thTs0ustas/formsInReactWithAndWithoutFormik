import React from "react";
import { Spinner } from "react-bootstrap";

export const Subscription = () => {
  return (
    <Spinner animation='border' role='status'>
      <span className='visually-hidden' />
    </Spinner>
  );
};

export { Subscription };
