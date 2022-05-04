import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { Reservation } from "../presentational/reservation";
import { useProvider } from "../../../model";
import { useResContainer } from "./customHooks/useResContainer";

import { handleChange, handleSeatAdd, handleSeatRemove } from "../helpers";
import { useContinueButtonHandler } from "./customHooks/useContinueButtonHandler";

function ReservationContainer() {
  const { username, isMember } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [state] = useProvider([
    "userInfo.username",
    "userInfo.isMember",
    "userInfo.token",
    "reservation.inputValues",
    "reservation.requests",
    "reservation.response",
    "BASE_URL",
  ]);

  const {
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

  useResContainer(dispatch);

  const props = {
    isMember,
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
}

export { ReservationContainer };
