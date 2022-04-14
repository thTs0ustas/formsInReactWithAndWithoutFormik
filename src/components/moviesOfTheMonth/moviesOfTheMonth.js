import { useEffect } from "react";
import React from "react";
import PropTypes from "prop-types";
import axios from 'axios';
import { Row, Col, NavItem } from 'react-bootstrap';
import {
  MoviesMonthImg,
  MoviesMonthScreeningContainer,
  MoviesMonthScreeningItem,
  ColStyled
} from "./styledComponents/styles";
import { useMoviesOfTheMonth } from "./hooks/useMoviesOfTheMonth";
import { useProvider } from "../../model";
import {
  ComingUp
} from "../../layouts/homePage/styledComponents/styles";
import { map } from "lodash";
import {Link} from 'react-router-dom';

export const MoviesOfTheMonth = () => {

  useMoviesOfTheMonth();
  const [state, dispatch] = useProvider();
  console.log(state)

  return (
    <ComingUp>
      {/* edw tha mpei to 1o map gia to carousel */}
      <Row className='flex-nowrap'>
        {map(state.homepage.movies[0], ({ Screenings, Movie: { id, title, genre, image, Screening } }) =>
          <ColStyled key={id} md={4} sm={6} xs={12}>
            <MoviesMonthImg src={`${state.BASE_URL}${image}`} />
            <p>{genre.replace(/^\w/, (c) => c.toUpperCase())}</p>
            <h2><Link to={`/reservation/${id}`}>{title}</Link></h2>
            <MoviesMonthScreeningContainer>
              {map(Screenings, ({ id, movie_starts }) =>
                <MoviesMonthScreeningItem key={id}>{movie_starts.split("T")[1].slice(0, 5)} PM</MoviesMonthScreeningItem>
              )}
            </MoviesMonthScreeningContainer>
          </ColStyled>
        )}


      </Row>
    </ComingUp>
  )
}