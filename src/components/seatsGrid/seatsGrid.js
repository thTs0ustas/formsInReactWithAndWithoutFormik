import React from "react";
import { SeatsContainer, Col, Container, SeatDiv, Screen } from "./styles";
import { Seat } from "./Seat";

import { groupBy, map } from "lodash";

const GenerateSeats = (seatNumbers, handleSeatRemove, handleSeatAdd, state) => {
  return (
    <SeatDiv>
      {seatNumbers.map((seatNumber) => (
        <Seat
          state={state}
          key={seatNumber.id}
          seat={seatNumber}
          handleSeatRemove={handleSeatRemove}
          handleSeatAdd={handleSeatAdd}
        />
      ))}
    </SeatDiv>
  );
};

const SeatMatrix = ({ seats, handleSeatRemove, handleSeatAdd, state }) => {
  const seatsCol = (seats) => map(groupBy(seats, "row_letter"));
  console.log(seatsCol(seats));
  return (
    <Container>
      <Screen>Screen</Screen>
      <SeatsContainer>
        {seatsCol(seats).map((seatArr, index) => (
          <Col key={index}>{GenerateSeats(seatArr, handleSeatRemove, handleSeatAdd, state)}</Col>
        ))}
      </SeatsContainer>
    </Container>
  );
};

export default SeatMatrix;
