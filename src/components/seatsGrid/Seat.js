import React from "react";
import { MdEventSeat } from "react-icons/md";

import { useProvider } from "../../model";
import { IconDiv } from "./styledComp";
import { keys } from "lodash";

export const Seat = ({ handleSeatRemove, handleSeatAdd, seatInfo }) => {
  const [state] = useProvider([
    "reservation.inputValues.numOfTickets.sum",
    "reservation.inputValues.seat",
    "reservation.requests.reservedSeats",
  ]);
  const { seat, sum, reservedSeats } = state;

  const exists = !!seat[seatInfo.id];
  const isAlready = reservedSeats && reservedSeats.find((item) => item["seats_id"] === seatInfo.id);

  return (
    <IconDiv
      id={`seat_${seat["seat_num"]}`}
      disabled={isAlready}
      onClick={(event) => {
        event.stopPropagation();
        event.preventDefault();
        exists ? handleSeatRemove(seatInfo.id) : keys(seat).length < sum && handleSeatAdd(seatInfo);
      }}
    >
      <MdEventSeat size={25} color={exists || isAlready ? "crimson" : "black"} />
    </IconDiv>
  );
};
