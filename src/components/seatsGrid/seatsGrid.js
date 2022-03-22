import React from "react";
import { groupBy, map, chunk } from "lodash";

import { Container, Screen, SeatDiv, SeatsContainer } from "./styledComp";
import { Seat } from "./Seat";
import { Col, Row } from "react-bootstrap";
import { useProvider } from "../../model";

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
  const [{ auditorium }] = useProvider(["reservation.inputValues.auditorium"]);

  return (
    <Container>
      <Screen>Screen</Screen>
      <SeatsContainer>
        {seatsCol(seats).map((seatArr, index) => {
          let counter = seatArr.length / auditorium[2];
          let cols = chunk(seatArr, Math.floor(counter));
          return (
            <Row key={index}>
              {map(cols, (column, i) => (
                <Col key={i}>{GenerateSeats(cols[i], handleSeatRemove, handleSeatAdd)}</Col>
              ))}
            </Row>
          );
        })}
      </SeatsContainer>
    </Container>
  );
};

export default SeatMatrix;
