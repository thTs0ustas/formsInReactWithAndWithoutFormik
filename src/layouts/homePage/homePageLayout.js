import React from "react";
import { Col, Row } from "react-bootstrap";

import {
  Archive,
  Card,
  ComingUp,
  Features,
  Footer,
  HomeDiv,
  Nav,
  NavDiv,
  NavItem,
  PromoCard,
  Promos,
  Typography,
  SignUpBar,
  SignUpButton,
  SignInButton,
  VideoWallDiv,
  VideoWallInfo,
} from "./styles";
import { useNavigate } from "react-router-dom";

const HomePageLayout = () => {
  const navigate = useNavigate();
  return (
    <HomeDiv>
      <SignUpBar>
        <SignUpButton>Sign Up</SignUpButton>
        <SignInButton onClick={() => navigate("/login")}>Sign In</SignInButton>
      </SignUpBar>
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
          <button>BOOK TICKETS</button>
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
