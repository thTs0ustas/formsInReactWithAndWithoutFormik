import React from "react";
import { IconDiv } from "./styles";
import { MdEventSeat } from "react-icons/md";

export const Seat = ({ handleSeatRemove, handleSeatAdd, seat, state }) => {
  const { inputValues, requests } = state;
  const exists = inputValues.seat && inputValues.seat.find((item) => item.id === seat.id);
  const isAlready =
    requests.reservedSeats && requests.reservedSeats.find((item) => item.seats_id === seat.id);

  return (
    <IconDiv
      id={`seat_${seat.seat_num}`}
      disabled={isAlready}
      onClick={(event) => {
        event.preventDefault();
        exists ? handleSeatRemove(seat.id) : handleSeatAdd(seat);
      }}
    >
      <MdEventSeat size={25} color={exists || isAlready ? "crimson" : "black"} />
    </IconDiv>
  );
};
