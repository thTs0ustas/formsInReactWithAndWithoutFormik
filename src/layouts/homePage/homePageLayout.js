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
} from "./styledComponents/styles";

import { Header, SignUpBar } from "../../theme";

import { SignupBarPart } from "../GlobalParts/SignupBarPart";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/NavBar";
import CarouselHero from "../../components/HeroSlider";
import { PromoMember, PromoStudents, Switch } from "../../components";

const HomePageLayout = ({ username }) => {
  return (
    <HomeDiv>
      <Header mainPage={false}>
        <SignUpBar>
          <Switch />
          <div>
            <SignupBarPart username={username} />
          </div>
        </SignUpBar>
        <VideoWallDiv>
          <NavBar />
          <CarouselHero />
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
              <Col md={6}>
                <PromoMember />
              </Col>
              <Col md={6}>
                <PromoStudents />
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
