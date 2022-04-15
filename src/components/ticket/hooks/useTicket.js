import React, { useEffect } from "react";
import { newTicketAction, resetReservation, useProvider } from "../../../model";
import { map, random } from "lodash";

export const useTicket = () => {
  const [
    {
      response,
      movie: { title, id },
    },
    dispatch,
  ] = useProvider(["reservation.response", "reservation.inputValues.movie"]);

  const barcode = () => {
    const numbers = map(Array(12), () => random(0, 9));
    const barcode = map(Array(152), () => random(0, 1));
    return { barcode, numbers };
  };

  useEffect(() => {
    if (response) {
      const { userWithNewRes, reservedSeats } = response;

      const payload = {
        id,
        title: `${title}`,
        userid: userWithNewRes.id,
        reservationId: userWithNewRes["Reservations"].at(-1).id,
        hall: userWithNewRes["Reservations"][0]["Screening"]["auditorium_id"],
        date: userWithNewRes["Reservations"][0]["Screening"]["movie_date"].split("T")[0],
        start: userWithNewRes["Reservations"][0]["Screening"]["movie_starts"]
          .split("T")[1]
          .slice(0, 5),
        seats: reservedSeats.map((seat) => ({
          id: seat["Seat"].id,
          cost: seat["cost"],
          row: seat["Seat"]["row_letter"],
          number: seat["Seat"]["seat_num"],
          barcode: barcode().barcode.join(""),
          numbers: barcode().numbers.join(""),
        })),
      };
      console.log(payload);
      dispatch(newTicketAction(payload));
      dispatch(resetReservation());
    }
  }, []);

  return {
    response,
  };
};
