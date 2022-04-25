import React from "react";
import { Col, Row } from "react-bootstrap";

import {
  Archive,
  Features,
  HomeDiv,
  Promos,
  Typography,
  VideoWallDiv,
} from "./styledComponents/styles";

import { Header, SignUpBar } from "../../theme";

import { SignupBarPart } from "../GlobalParts/SignupBarPart";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/NavBar";
import CarouselHero from "../../components/HeroSlider";
import { CardComponent, PromoMember, PromoStudents, Switch } from "../../components";
import { MoviesOfTheMonth } from "../../components/moviesOfTheMonth/moviesOfTheMonth";
import { TitleHeader } from "../../components/moviesOfTheMonth/styledComponents/styles";

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
          <br />
          <Typography>
            <TitleHeader>
              <h2>
                <span>MOVIE LIBRARY</span>
              </h2>

              <p>Arranged By Genre</p>
            </TitleHeader>
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
