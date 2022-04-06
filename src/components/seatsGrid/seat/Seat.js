import React from "react";
import { keys } from "lodash";
import { MdEventSeat } from "react-icons/md";

import { IconDiv } from "../styledComponents";
import { useProvider } from "../../../model";

export const Seat = ({ handleSeatRemove, handleSeatAdd, seatInfo }) => {
  const [state] = useProvider([
    "reservation.inputValues.numOfTickets.sum",
    "reservation.inputValues.seat",
    "reservation.requests.reservedSeats",
  ]);
  const { seat, sum, reservedSeats } = state;

  const exists = !!seat[seatInfo.id];
  const isAlreadyTaken = reservedSeats?.find(
    (item) => item["seats_id"] === seatInfo.id
  );

  return (
    <IconDiv
      id={`seat_${seat["seat_num"]}`}
      disabled={isAlreadyTaken}
      onClick={(event) => {
        event.stopPropagation();
        event.preventDefault();
        exists
          ? handleSeatRemove(seatInfo.id)
          : keys(seat).length < sum && handleSeatAdd(seatInfo);
      }}
    >
      <MdEventSeat
        size={25}
        color={exists ? "crimson" : isAlreadyTaken ? "black" : "#FF9D69"}
      />
    </IconDiv>
  );
};
