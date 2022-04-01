import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { map } from "lodash";
import axios from "axios";

import { Reservation } from "../presentational/reservation";
import { responseAction, useProvider } from "../../../model";
import { useResContainer } from "./customHooks/useResContainer";
import { price } from "../helpers";

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

  const { handleSeatAdd, handleSeatRemove, handleChange } = useResContainer({
    BASE_URL,
    inputValues,
    dispatch,
    response,
    username,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${BASE_URL}/reservations/users/${username}/new`, {
        data: {
          screening_id: +inputValues.screening,
          price: +price(inputValues.seat),
          seats: map(inputValues.seat, (seat) => ({
            id: seat.id,
            discount_type: "adult",
            cost: seat.cost,
            screening_id: inputValues.screening,
          })),
        },
      })
      .then(({ data }) => dispatch(responseAction(data)));
  };

  const props = {
    navigate,
    BASE_URL,
    handleSubmit,
    handleChange,
    handleSeatRemove,
    handleSeatAdd,
    inputValues,
    requests,
    state,
    numOfTickets,
  };

  return <Reservation {...props} />;
};

export default ReservationContainer;
