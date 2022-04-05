import React from "react";
import { Col, Row } from "react-bootstrap";
// import { Link } from "react-router-dom";
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
} from "./styledComponents/styles";

import { Header, SignUpBar } from "../../theme";

import { SignupBarPart } from "../GlobalParts/SignupBarPart";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/NavBar";
import CarouselHero from "../../components/HeroSlider";

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
          {/*<NavDiv>*/}
          {/*</NavDiv>*/}
          <NavBar />
          <CarouselHero />
          {/*<VideoWallInfo>*/}
          {/*  <p>Small Description</p>*/}
          {/*  <h2>Movie Title</h2>*/}
          {/*  <Link to='/reservation'>*/}
          {/*    <button>BOOK TICKETS</button>*/}
          {/*  </Link>*/}
          {/*</VideoWallInfo>*/}
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
