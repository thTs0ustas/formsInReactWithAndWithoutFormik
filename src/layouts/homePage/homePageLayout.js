import React from "react";
import { Col, Row } from "react-bootstrap";

import {
  VideoWallInfo,
  HomeDiv,
  NavDiv,
  VideoWallDiv,
  Features,
  Footer,
  ComingUp,
  Archive,
  Typography,
  Card,
  PromoCard,
  Promos,
  Nav,
  NavItem,
} from "./styles";

const HomePageLayout = () => {
  return (
    <HomeDiv>
      <VideoWallDiv>
        <NavDiv>
          <Nav>
            <NavItem>1</NavItem>
            <NavItem>2</NavItem>
            <NavItem>3</NavItem>
            <NavItem>4</NavItem>
            <NavItem>5</NavItem>
            <NavItem>6</NavItem>
            <NavItem>7</NavItem>
          </Nav>
        </NavDiv>
        <VideoWallInfo>
          <p>Small Description</p>
          <h2>Movie Title</h2>
          <a>BOOK TICKETS</a>
        </VideoWallInfo>
      </VideoWallDiv>
      <div>
        <Features>
          <Typography>
            <h2>Title</h2>
            <p>Under Title</p>
          </Typography>
          <ComingUp>
            <Row className="flex-nowrap">
              <Col md={4} sm={6} xs={12}>
                <Card />
              </Col>
              <Col md={4} sm={6} xs={12}>
                <Card />
              </Col>
              <Col md={4} sm={6} xs={12}>
                <Card />
              </Col>
            </Row>
          </ComingUp>
          <Promos>
            <Row>
              <Col sm={6}>
                <PromoCard />
              </Col>
              <Col sm={6}>
                <PromoCard />
              </Col>
            </Row>
          </Promos>
          <Typography>
            <h2>Title</h2>
            <p>Under Title</p>
          </Typography>
          <Archive>
            <Row>
              <Col sm={6}>
                <PromoCard />
              </Col>
              <Col sm={6}>
                <PromoCard />
              </Col>
              <Col sm={6}>
                <PromoCard />
              </Col>
              <Col sm={6}>
                <PromoCard />
              </Col>
              <Col sm={6}>
                <PromoCard />
              </Col>
              <Col sm={6}>
                <PromoCard />
              </Col>
            </Row>
          </Archive>
        </Features>
      </div>
      <Footer />
    </HomeDiv>
  );
};

export default HomePageLayout;
