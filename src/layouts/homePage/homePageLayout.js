import React from "react";
import { Col, NavDropdown, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Archive,
  Card,
  ComingUp,
  Features,
  HomeDiv,
  NavDropdownDiv,
  PromoCard,
  Promos,
  Typography,
  VideoWallDiv,
  VideoWallInfo,
} from "./styledComponents/styles";
import { useNavigate } from "react-router-dom";
import {
  Footer,
  Header,
  Nav,
  NavDiv,
  NavItem,
  SignInButton,
  SignUpBar,
  SignUpButton,
} from "../../theme";

const HomePageLayout = () => {
  const navigate = useNavigate();
  const username = sessionStorage.getItem("username");
  return (
    <HomeDiv>
      <Header mainPage={false}>
        <SignUpBar>
          <div>
            {!username ? (
              <>
                <SignUpButton>Sign Up</SignUpButton>
                <SignInButton onClick={() => navigate("/login")}>Sign In</SignInButton>
              </>
            ) : (
              <NavDropdownDiv title={username} id='nav-dropdown'>
                <NavDropdown.Item eventKey='4.1'>Info</NavDropdown.Item>
                <NavDropdown.Item eventKey='4.1'>Reservations</NavDropdown.Item>
                <NavDropdown.Item eventKey='4.1'>Reviews</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  eventKey='4.2'
                  onClick={() => {
                    sessionStorage.removeItem("username");
                    sessionStorage.removeItem("token");
                    navigate("/");
                  }}
                >
                  Sign Out
                </NavDropdown.Item>
              </NavDropdownDiv>
            )}
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
