import React from "react";
import { chunk, groupBy, map } from "lodash";
import { Col, Row } from "react-bootstrap";
import { v4 as uuid4 } from "uuid";
import { useSelector } from "react-redux";
import { GenerateSeats } from "../generateSeatsRows/GenerateSeats";
import { Container, Screen, SeatsContainer } from "../styledComponents";

function SeatMatrix() {
  const { auditorium } = useSelector((state) => state.reservation.inputValues);
  const { seats } = useSelector((state) => state.reservation.requests);

  const seatsCol = (seatsArg) => map(groupBy(seatsArg, "row_letter"));
  return (
    <Container>
      <Screen>Screen</Screen>
      <SeatsContainer>
        {seatsCol(seats[auditorium[0]]).map((seatArr) => {
          const numberOfColumns = Math.round(seatArr.length / auditorium[2]);
          const cols = chunk(seatArr, numberOfColumns);

          return (
            <Row key={uuid4()}>
              {map(cols, (column, i) => (
                <Col key={i}>
                  <GenerateSeats seatNumbers={cols[i]} />
                </Col>
              ))}
            </Row>
          );
        })}
      </SeatsContainer>
    </Container>
  );
}

export { SeatMatrix };
