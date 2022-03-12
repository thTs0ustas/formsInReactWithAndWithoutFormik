import React from "react";

import { useParams } from "react-router-dom";
import { useReservations } from "../customHooks/useReservations";
import { Reservation } from "../presentational/reservation";

const ReservationContainer = () => {
  let { username } = useParams();
  const {
    handleSubmit,
    cinema,
    movies,
    handleChange,
    response,
    values,
    //  price
    // auditorium,
    // screening,
    // seats,
  } = useReservations(username);

  const props = {
    handleSubmit,
    movies,
    cinema,
    handleChange,
    response,
    values,
    //  price
    // auditorium,
    // screening,
    // seats,
  };

  return <Reservation {...props} />;
};

export default ReservationContainer;
