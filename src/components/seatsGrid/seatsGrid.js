import React, { useState } from "react";
import { MdEventSeat } from "react-icons/md";

import { SeatsContainer, Col, Container, IconDiv, SeatDiv, Screen } from "./styles";

const Seat = () => {
  const [selected, setSelected] = useState(false);
  const onSelect = () => setSelected(!selected);

  return (
    <IconDiv onClick={onSelect}>
      <MdEventSeat size={25} color={selected ? "crimson" : "black"} />
    </IconDiv>
  );
};

const GenerateSeats = (seatNumbers) => {
  return (
    <SeatDiv>
      {seatNumbers.map((seatNumber) => (
        <Seat key={seatNumber} />
      ))}
    </SeatDiv>
  );
};

const SeatMatrix = () => {
  return (
    <Container>
      <Screen>Screen</Screen>
      <SeatsContainer>
        <Col>
          {GenerateSeats([1, 2, 3, 4])}
          {GenerateSeats([5, 6, 7, 8])}
        </Col>
        <Col>
          {GenerateSeats([13, 14, 15, 16, 17])}
          {GenerateSeats([18, 19, 20, 21, 22])}
          {GenerateSeats([23, 24, 25, 26, 27])}
          {GenerateSeats([28, 29, 30, 31, 32])}
        </Col>
        <Col>
          {GenerateSeats([33, 34, 35, 36])}
          {GenerateSeats([37, 38, 39, 40])}
        </Col>
      </SeatsContainer>
    </Container>
  );
};

export default SeatMatrix;
