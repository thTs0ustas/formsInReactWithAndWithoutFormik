import React from "react";
import { MdEventSeat } from "react-icons/md";

import { useProvider } from "../../model";
import { IconDiv } from "./styledComp";

export const Seat = ({ handleSeatRemove, handleSeatAdd, seatInfo }) => {
  const [state] = useProvider([
    "reservation.inputValues.seat",
    "reservation.requests.reservedSeats",
  ]);
  const { seat, reservedSeats } = state;

  const exists = !!seat[seatInfo.id];
  const isAlready = reservedSeats && reservedSeats.find((item) => item["seats_id"] === seatInfo.id);

  return (
    <IconDiv
      id={`seat_${seat["seat_num"]}`}
      disabled={isAlready}
      onClick={(event) => {
        event.preventDefault();
        exists ? handleSeatRemove(seatInfo.id) : handleSeatAdd(seatInfo);
      }}
    >
      <MdEventSeat size={25} color={exists || isAlready ? "crimson" : "black"} />
    </IconDiv>
  );
};
