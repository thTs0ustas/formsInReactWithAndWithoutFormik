import React from "react";
import { chunk, groupBy, map } from "lodash";
import { Col, Row } from "react-bootstrap";
import { GenerateSeats } from "../generateSeatsRows/GenerateSeats";
import { Container, Screen, SeatsContainer } from "../styledComponents";

import { selectors, useProvider } from "../../../model";

const SeatMatrix = () => {
  const seatsCol = (seats) => map(groupBy(seats, "row_letter"));
  const [{ auditorium, seats }] = useProvider([selectors.inputAuditoriums, selectors.resSeats]);

  return (
    <Container>
      <Screen>Screen</Screen>

      <SeatsContainer>
        {seatsCol(seats[auditorium[0]]).map((seatArr, index) => {
          const numberOfColumns = Math.round(seatArr.length / auditorium[2]);
          const cols = chunk(seatArr, numberOfColumns);

          return (
            <Row key={index}>
              {map(cols, (column, i) => (
                <Col key={i}> {GenerateSeats(cols[i])}</Col>
              ))}
            </Row>
          );
        })}
      </SeatsContainer>
    </Container>
  );
};

export { SeatMatrix };
