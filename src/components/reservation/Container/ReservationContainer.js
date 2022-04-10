import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Reservation } from "../presentational/reservation";
import { useProvider } from "../../../model";
import { useResContainer } from "./customHooks/useResContainer";
import { paymentWithStripe } from "../../../stripe/stripe";
import { PRICING } from "../helpers";
import { filter, flow, keys, map, omit } from "lodash/fp";

const ReservationContainer = () => {
  const [state, dispatch] = useProvider([
    "reservation.inputValues",
    "reservation.requests",
    "reservation.response",
    "BASE_URL",
  ]);

  const username = window.sessionStorage.getItem("username");
  const {
    inputValues,
    requests,
    response,
    inputValues: { numOfTickets },
    BASE_URL,
  } = state;

  const navigate = useNavigate();
  const [spinner, setSpinner] = useState(true);

  const dataForPayment = (tickets) =>
    flow(
      omit("sum"),
      keys,
      map((ticket) => {
        if (tickets[ticket] > 0) {
          return {
            name: `${ticket} ticket`.toUpperCase(),
            price: PRICING[ticket] * 100,
            quantity: tickets[ticket],
          };
        }
      }),
      filter(undefined)
    )(tickets);

  const handleContinueButton = (ev) => {
    ev.preventDefault();
    setSpinner(!spinner);
    if (username)
      paymentWithStripe(
        BASE_URL,
        {
          data: dataForPayment(numOfTickets),
          username,
        },
        { BASE_URL, seat: inputValues.seat, screening: inputValues.screening },
        dispatch
      );
  };

  const { handleSeatAdd, handleSeatRemove, handleChange } = useResContainer({
    BASE_URL,
    inputValues,
    dispatch,
    response,
  });

  const props = {
    handleContinueButton,
    handleChange,
    handleSeatRemove,
    handleSeatAdd,
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

export default ReservationContainer;
