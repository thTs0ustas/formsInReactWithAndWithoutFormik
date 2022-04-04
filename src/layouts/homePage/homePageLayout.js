import React from "react";
import { Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Archive,
  Card,
  ComingUp,
  Features,
  HomeDiv,
  PromoCard,
  Promos,
  Typography,
  VideoWallDiv,
  VideoWallInfo,
} from "./styledComponents/styles";
import { Footer, Header, Nav, NavDiv, NavItem, SignUpBar } from "../../theme";
import { SignupBarPart } from "../GlobalParts/SignupBarPart";
import Footer from "../../components/footer/Footer";


const HomePageLayout = () => {
  const username = sessionStorage.getItem("username");
  return (
    <HomeDiv>
      <Header mainPage={false}>
        <SignUpBar>
          <div>
            <SignupBarPart username={username} />
          </div>
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
      </Header>
      <div>
        <Features>
          <Typography>
            <h2>Title</h2>
            <p>Under Title</p>
          </Typography>
          <ComingUp>
            <Row className='flex-nowrap'>
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

export { HomePageLayout };
