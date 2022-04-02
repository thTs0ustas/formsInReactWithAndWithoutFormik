import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Reservation } from "../presentational/reservation";
import { useProvider } from "../../../model";
import { useResContainer } from "./customHooks/useResContainer";

const ReservationContainer = () => {
  const [state, dispatch] = useProvider([
    "reservation.inputValues",
    "reservation.requests",
    "reservation.response",
    "BASE_URL",
  ]);

  const { inputValues, requests, response, numOfTickets, BASE_URL } = state;
  const { username } = useParams();
  const navigate = useNavigate();
  const [spinner, setSpinner] = useState(true);

  const { handleSeatAdd, handleSeatRemove, handleChange } = useResContainer({
    BASE_URL,
    inputValues,
    dispatch,
    response,
    username,
  });

  const props = {
    handleChange,
    handleSeatRemove,
    handleSeatAdd,
    spinner,
    setSpinner,
    navigate,
    BASE_URL,
    inputValues,
    requests,
    username,
    state,
    numOfTickets,
  };

  return <Reservation {...props} />;
};

export default ReservationContainer;
