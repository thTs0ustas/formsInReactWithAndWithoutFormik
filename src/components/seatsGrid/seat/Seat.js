import React from "react";
import { MdEventSeat } from "react-icons/md";
import PropTypes from "prop-types";
import { IconDiv } from "../styledComponents";
import { useSeat } from "./hooks/useSeat";

export function Seat({ id, seatInfo }) {
  const { isAlreadyTaken, handleClick, exists } = useSeat(id, seatInfo);

  return (
    <IconDiv id={`seat_${seatInfo.seat_num}`} disabled={isAlreadyTaken} onClick={handleClick}>
      <MdEventSeat size={25} color={isAlreadyTaken ? "black" : exists ? "crimson" : "#FF9D69"} />
    </IconDiv>
  );
}

Seat.propTypes = {
  id: PropTypes.number.isRequired,
  seatInfo: PropTypes.object.isRequired,
};
