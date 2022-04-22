import React from "react";
import { Seat } from "../seat/Seat";
import { SeatDiv } from "../styledComponents";

const GenerateSeats = (seatNumbers) => {
  return (
    <SeatDiv>
      {seatNumbers.map((seatNumber) => (
        <Seat
          key={`${seatNumber.row_letter}_${seatNumber.seat_num}`}
          id={seatNumber.id}
          seatInfo={seatNumber}
        />
      ))}
    </SeatDiv>
  );
};

export { GenerateSeats };
