import React from "react";
import PropTypes from "prop-types";
import { addTicketAction, removeTicketAction, useProvider } from "../../../../../model";
import { ButtonForTickets } from "../../styledComponents";

export function TicketButton({ children, add = false, subtract = false, type, disabled, left }) {
  const [model, dispatch] = useProvider(["reservation.inputValues.numOfTickets"]);
  const handleClick = (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (add && !subtract && model.numOfTickets[type] >= 0) dispatch(addTicketAction(type));
    if (subtract && !add && model.numOfTickets[type] > 0) dispatch(removeTicketAction(type));
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
