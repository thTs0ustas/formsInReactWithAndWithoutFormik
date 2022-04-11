import React from "react";
import { MdEventSeat } from "react-icons/md";
import { IconDiv } from "../styledComponents";
import { useSeat } from "./hooks/useSeat";

export const Seat = ({ seatInfo, handleSeatRemove, handleSeatAdd }) => {
  const { isAlreadyTaken, handleClick, seat, exists } = useSeat(
    seatInfo,
    handleSeatRemove,
    handleSeatAdd
  );

  return (
    <IconDiv
      id={`seat_${seat["seat_num"]}`}
      disabled={isAlreadyTaken}
      onClick={handleClick}
    >
      <MdEventSeat
        size={25}
        color={isAlreadyTaken ? "black" : exists ? "crimson" : "#FF9D69"}
      />
    </IconDiv>
  );
};
