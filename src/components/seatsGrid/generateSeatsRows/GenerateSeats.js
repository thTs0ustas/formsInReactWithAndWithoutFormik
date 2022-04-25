import React from "react";
import { Seat } from "../seat/Seat";
import { SeatDiv } from "../styledComponents";

const GenerateSeats = (seatNumbers) => {
  return (
    <SeatDiv>
      {/* eslint-disable-next-line react/destructuring-assignment */}
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
