import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { ButtonForTickets } from "../../styledComponents";
import { addTicket, removeTicket } from "../../../../../features";

export function TicketButton({ children, add = false, subtract = false, type, disabled, left }) {
  const dispatch = useDispatch();
  const { seatToTicket } = useSelector((state) => state.seat);
  const handleClick = (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (add && !subtract && seatToTicket[type] >= 0) dispatch(addTicket(type));
    if (subtract && !add && seatToTicket[type] > 0) dispatch(removeTicket(type));
  };
  return (
    <ButtonForTickets left={left} disabled={disabled} onClick={handleClick}>
      {children}
    </ButtonForTickets>
  );
}

TicketButton.propTypes = {
  children: PropTypes.node.isRequired,
  add: PropTypes.bool.isRequired,
  subtract: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  left: PropTypes.bool.isRequired,
};
