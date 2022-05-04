import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { Reservation } from "../presentational/reservation";
import { useProvider } from "../../../model";
import { useResContainer } from "./customHooks/useResContainer";

import { handleChange, handleSeatAdd, handleSeatRemove } from "../helpers";
import { useContinueButtonHandler } from "./customHooks/useContinueButtonHandler";
import { BASE_URL } from "../../../constants";

function ReservationContainer() {
  const {
    user: { username, isMember },
    requests,
    inputValues,
    seat,
  } = useSelector((state) => ({
    user: state.user,
    requests: state.reservation.requests,
    inputValues: state.reservation.inputValues,
    seat: state.seat,
  }));
  const dispatch = useDispatch();
  const [state] = useProvider(["reservation.inputValues", "reservation.response"]);

  const {
    inputValues: { numOfTickets },
  } = state;

  const navigate = useNavigate();

  const data = useLocation();

  const { spinner, setSpinner, handleContinueButton } = useContinueButtonHandler(
    BASE_URL,
    numOfTickets
  );

  useResContainer(dispatch);

  const props = {
    seat,
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
