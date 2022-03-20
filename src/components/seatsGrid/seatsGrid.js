import React from "react";
import { Col, Container, Screen, SeatDiv, SeatsContainer } from "./styledComp";
import { Seat } from "./Seat";

import { groupBy, map } from "lodash";

const GenerateSeats = (seatNumbers, handleSeatRemove, handleSeatAdd) => {
  return (
    <SeatDiv>
      {seatNumbers.map((seatNumber) => (
        <Seat
          key={seatNumber.id}
          seatInfo={seatNumber}
          handleSeatRemove={handleSeatRemove}
          handleSeatAdd={handleSeatAdd}
        />
      ))}
    </SeatDiv>
  );
};

const SeatMatrix = ({ seats, handleSeatRemove, handleSeatAdd }) => {
  const seatsCol = (seats) => map(groupBy(seats, "row_letter"));

  return (
    <Container>
      <Screen>Screen</Screen>
      <SeatsContainer>
        {seatsCol(seats).map((seatArr, index) => (
          <Col key={index}>{GenerateSeats(seatArr, handleSeatRemove, handleSeatAdd)}</Col>
        ))}
      </SeatsContainer>
    </Container>
  );
};

export default SeatMatrix;
