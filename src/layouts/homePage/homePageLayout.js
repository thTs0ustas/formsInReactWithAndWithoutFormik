import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
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

import {   
  MoviesMonthImg,
  MoviesMonthScreeningContainer,
  MoviesMonthScreeningItem,
} from "../../components/moviesOfTheMonth/styledComponents/styles";

import { Header, Nav, NavDiv, NavItem, SignUpBar } from "../../theme";
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
            <Link to='/reservation'>
              <button>BOOK TICKETS</button>
            </Link>
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
                <MoviesMonthImg src="../../assets/small-images/movie_11-min.jpg" />
                <p>M</p>
                <h2><a href="">Matrix</a></h2>
                <MoviesMonthScreeningContainer>
                  <MoviesMonthScreeningItem>03:50 PM </MoviesMonthScreeningItem>
                  <MoviesMonthScreeningItem>06:50 PM</MoviesMonthScreeningItem>
                  <MoviesMonthScreeningItem>09:50 PM</MoviesMonthScreeningItem>
                </MoviesMonthScreeningContainer>
              </Col>
              <Col md={4} sm={6} xs={12}>
                <MoviesMonthImg src="../../assets/small-images/movie_21-min.jpg" />
                <p>M</p>
                <h2><a href="">A New Hope</a></h2>
                <MoviesMonthScreeningContainer>
                  <MoviesMonthScreeningItem>03:50 PM </MoviesMonthScreeningItem>
                  <MoviesMonthScreeningItem>06:50 PM</MoviesMonthScreeningItem>
                  <MoviesMonthScreeningItem>09:50 PM</MoviesMonthScreeningItem>
                </MoviesMonthScreeningContainer>
              </Col>
              <Col md={4} sm={6} xs={12}>
                <MoviesMonthImg src="../../assets/small-images/movie_10-min.jpg" />
                <p>M</p>
                <h2><a href="">Empire Strikes Back</a></h2>
                <MoviesMonthScreeningContainer>
                  <MoviesMonthScreeningItem>03:50 PM </MoviesMonthScreeningItem>
                  <MoviesMonthScreeningItem>06:50 PM</MoviesMonthScreeningItem>
                  <MoviesMonthScreeningItem>09:50 PM</MoviesMonthScreeningItem>
                </MoviesMonthScreeningContainer>
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
