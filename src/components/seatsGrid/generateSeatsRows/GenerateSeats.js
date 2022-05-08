import React from "react";
import PropTypes from "prop-types";
import { Seat } from "../seat/Seat";
import { SeatDiv } from "../styledComponents";

function GenerateSeats({ seatNumbers }) {
  return (
    <SeatDiv>
      {seatNumbers.map(({ seatNumber, seatNumber: { row_letter, seat_num, id } }) => (
        <Seat key={`${row_letter}_${seat_num}`} id={id} seatInfo={seatNumber} />
      ))}
    </SeatDiv>
  );
}

GenerateSeats.propTypes = {
  seatNumbers: PropTypes.arrayOf(
    PropTypes.shape({
      seatNumber: PropTypes.shape({
        row_letter: PropTypes.string.isRequired,
        seat_num: PropTypes.number.isRequired,
        id: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
};

export { GenerateSeats };
