import React from "react";
import { Seat } from "../seat/Seat";
import { SeatDiv } from "../styledComponents";

const GenerateSeats = (seatNumbers, handleSeatRemove, handleSeatAdd) => {
  return (
    <SeatDiv>
      {seatNumbers.map((seatNumber) => (
        <Seat
          key={seatNumber.id}
          handleSeatRemove={handleSeatRemove}
          handleSeatAdd={handleSeatAdd}
          seatInfo={seatNumber}
        />
      ))}
    </SeatDiv>
  );
};

export { GenerateSeats };
