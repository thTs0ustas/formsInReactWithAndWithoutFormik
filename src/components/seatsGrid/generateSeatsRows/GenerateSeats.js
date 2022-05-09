import React from "react";
import PropTypes from "prop-types";
import { Seat } from "../seat/Seat";
import { SeatDiv } from "../styledComponents";

function GenerateSeats({ seatNumbers }) {
  return (
    <SeatDiv>
      {seatNumbers.map((seatNumber) => {
        const { row_letter, seat_num, id } = seatNumber;
        return <Seat key={`${row_letter}_${seat_num}`} id={id} seatInfo={seatNumber} />;
      })}
    </SeatDiv>
  );
}

GenerateSeats.defaultProps = {
  seatNumbers: [],
};

GenerateSeats.propTypes = {
  seatNumbers: PropTypes.arrayOf(
    PropTypes.shape({
      row_letter: PropTypes.string.isRequired,
      seat_num: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ),
};

export { GenerateSeats };
