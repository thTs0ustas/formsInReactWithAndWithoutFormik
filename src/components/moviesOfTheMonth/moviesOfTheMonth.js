import { useEffect } from "react";
import React from "react";
import PropTypes from "prop-types";
import axios from 'axios';

import {   
    MoviesMonthImg,
    MoviesMonthScreeningContainer,
    MoviesMonthScreeningItem, 
} from "./styledComponents/styles";

import {
    Row,
    Col,
    ComingUp
} from "../../layouts/homePage/styledComponents";

export const MoviesOfTheMonth = () => {









    return (
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
    )
}