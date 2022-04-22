import React from "react";
import { Col, Row } from "react-bootstrap";

import {
  Archive,
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
import { MoviesOfTheMonth } from "../../components/moviesOfTheMonth/moviesOfTheMonth";
import { CardComponent } from "../../components";

const HomePageLayout = ({ username }) => {
  const genres = [
    "action",
    "adventure",
    "animation",
    "comedy",
    "crime",
    "drama",
    "horror",
    "mystery",
    "sci-fi",
    "thriller",
    "war",
    "western",
  ];
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
          <MoviesOfTheMonth />
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
              {genres.map((genre) => {
                return (
                  <Col sm={6} key={genre}>
                    <CardComponent genre={genre} />
                  </Col>
                );
              })}
            </Row>
          </Archive>
        </Features>
      </div>
      <Footer />
    </HomeDiv>
  );
};

export { HomePageLayout };
