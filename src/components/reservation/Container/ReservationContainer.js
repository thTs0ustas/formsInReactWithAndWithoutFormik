import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Reservation } from "../presentational/reservation";
import { useProvider } from "../../../model";
import { useResContainer } from "./customHooks/useResContainer";

import { handleChange, handleSeatAdd, handleSeatRemove } from "../helpers";
import { useContinueButtonHandler } from "./customHooks/useContinueButtonHandler";

const ReservationContainer = () => {
  const [state, dispatch] = useProvider([
    "userInfo.username",
    "userInfo.token",
    "reservation.inputValues",
    "reservation.requests",
    "reservation.response",
    "BASE_URL",
  ]);

  const {
    username,
    inputValues,
    requests,

    inputValues: { numOfTickets },
    BASE_URL,
  } = state;

  const navigate = useNavigate();

  const data = useLocation();

  const { spinner, setSpinner, handleContinueButton } = useContinueButtonHandler(
    BASE_URL,
    numOfTickets
  );

  useResContainer({
    BASE_URL,
    dispatch,
  });

  const props = {
    image: data.state,
    handleContinueButton,
    handleChange: handleChange(dispatch),
    handleSeatRemove: handleSeatRemove(dispatch),
    handleSeatAdd: handleSeatAdd(dispatch),
    spinner,
    setSpinner,
    navigate,
    BASE_URL,
    inputValues,
    requests,
    state,
    numOfTickets,
    username,
  };

  return <Reservation {...props} />;
};

export { ReservationContainer };
