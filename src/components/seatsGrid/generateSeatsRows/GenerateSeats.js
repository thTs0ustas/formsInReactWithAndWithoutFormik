import React from "react";
import { Seat } from "../seat/Seat";
import { SeatDiv } from "../styledComponents";

function GenerateSeats(seatNumbers) {
  return (
    <SeatDiv>
      {/* eslint-disable-next-line react/destructuring-assignment */}
      {seatNumbers.map(({ seatNumber, seatNumber: { row_letter, seat_num, id } }) => (
        <Seat key={`${row_letter}_${seat_num}`} id={id} seatInfo={seatNumber} />
      ))}
    </SeatDiv>
  );
}

export { GenerateSeats };
