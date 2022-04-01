import React from "react";
import { chunk, groupBy, map } from "lodash";
import { Col, Row } from "react-bootstrap";

import { GenerateSeats } from "../generateSeatsRows/GenerateSeats";
import { Container, Screen, SeatsContainer } from "../styledComponents";

import { useProvider } from "../../../model";

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

export { SeatMatrix };
