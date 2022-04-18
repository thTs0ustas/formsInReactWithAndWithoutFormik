import { useState, useEffect } from "react";
import React from "react";
import PropTypes from "prop-types";
import axios from 'axios';
import { Row, Col, NavItem } from 'react-bootstrap';
import {
  ShowingToday,
  MoviesMonthImg,
  MoviesMonthScreeningContainer,
  MoviesMonthScreeningItem,
  ColStyled,
  TitleHeader
} from "./styledComponents/styles";
import { useMoviesOfTheMonth } from "./hooks/useMoviesOfTheMonth";
import { useProvider } from "../../model";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
// import { ButtonIcon, CarouselButton } from "./";
import { map } from "lodash";
import {Link} from 'react-router-dom';

export const MoviesOfTheMonth = () => {

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  useMoviesOfTheMonth();
  const [state, dispatch] = useProvider();
  console.log(state)

  return (
    <>
    <TitleHeader>
      <h2>FILMS SHOWING TODAY</h2>
      <p>See all films & session times</p>
    </TitleHeader>
    <ShowingToday>
    <Carousel activeIndex={index} onSelect={handleSelect} fade>
      {/* edw tha mpei to 1o map gia to carousel */}

      <Row className='flex-nowrap'>
        {map(state.homepage.movies[0], ({ Screenings, Movie: { id, title, genre, image, Screening } }) =>
          <ColStyled key={id} md={4} sm={6} xs={12}>
        <Carousel.Item key={id} interval={3000}>
            <MoviesMonthImg src={`${state.BASE_URL}${image}`} />
            <p>{genre.replace(/^\w/, (c) => c.toUpperCase())}</p>
            <h2><Link to={`/reservation/${id}`}>{title}</Link></h2>
            <MoviesMonthScreeningContainer>
              {map(Screenings, ({ id, movie_starts }) =>
                <MoviesMonthScreeningItem key={id}>{movie_starts.split("T")[1].slice(0, 5)} PM</MoviesMonthScreeningItem>
              )}
            </MoviesMonthScreeningContainer>
          </Carousel.Item>
          </ColStyled>
        )}


      </Row>
      </Carousel>
    </ShowingToday>
    </>
  )
}