import React from "react";
import { Spinner } from "react-bootstrap";
import { useSubscription } from "./hooks/useSubscription";

function Subscription() {
  useSubscription();
  return (
    <Spinner animation='border' role='status'>
      <span className='visually-hidden' />
    </Spinner>
  );
}

export { Subscription };
