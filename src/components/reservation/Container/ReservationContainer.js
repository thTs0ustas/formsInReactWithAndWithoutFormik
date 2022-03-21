import React from "react";
import { useParams } from "react-router-dom";
import { map } from "lodash";
import axios from "axios";

import { Reservation } from "../presentational/reservation";
import { useProvider, actionTypes } from "../../../model";
import { useResContainer } from "./customHooks/useResContainer";
import { price } from "../helpers";

const ReservationContainer = (WrapComponent) => () => {
  const [state, dispatch] = useProvider([
    "reservation.inputValues",
    "reservation.requests",
    "reservation.response",
    "BASE_URL",
  ]);

  const { inputValues, requests, response, BASE_URL } = state;
  const { username } = useParams();

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
      .then(({ data }) =>
        dispatch({
          type: actionTypes.response,
          payload: data,
        })
      );
  };

  const props = {
    handleSubmit,
    handleChange,
    handleSeatRemove,
    handleSeatAdd,
    inputValues,
    requests,
    state,
  };

  return <WrapComponent {...props} />;
};

export default ReservationContainer(Reservation);
