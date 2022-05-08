import { map } from "lodash";
import { Col, Row } from "react-bootstrap";
import React from "react";
import { v4 as uuid4 } from "uuid";
import { PromoMember } from "../PromoMembers/PromoMembers";
import { dataObject } from "../data/dataObject";

function PromoCards() {
  return (
    <Row>
      {map(dataObject, (item) => (
        <Col key={uuid4()} md={6}>
          <PromoMember {...item} />
        </Col>
      ))}
    </Row>
  );
}

export { PromoCards };
