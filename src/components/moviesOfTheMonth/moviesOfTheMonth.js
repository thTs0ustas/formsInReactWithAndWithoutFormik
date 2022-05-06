import React from "react";
import { map } from "lodash";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  ColStyled,
  MoviesMonthImg,
  MoviesMonthScreeningContainer,
  MoviesMonthScreeningItem,
  ShowingToday,
  TitleHeader,
} from "./styledComponents/styles";
import { useMoviesOfTheMonth } from "./hooks/useMoviesOfTheMonth";
import "bootstrap/dist/css/bootstrap.min.css";

import { NowShowingStackHome } from "../nowShowingMovies/styledComponents/styles";
import { BASE_URL } from "../../constants";
import { movieTime } from "./helpers/movieTime";

export function MoviesOfTheMonth() {
  useMoviesOfTheMonth();

  const navigate = useNavigate();
  const { todayMovies } = useSelector((state) => state.nowPlaying);

  return (
    <>
      <TitleHeader>
        <h2>
          <span>FILMS SHOWING TODAY</span>
        </h2>
        <Link to='/nowPlaying'>
          <p>See all films & session times</p>
        </Link>
      </TitleHeader>
      <ShowingToday>
        {map(todayMovies, ({ id, Screenings, Movie }) => (
          <ColStyled key={id}>
            <NowShowingStackHome>
              <MoviesMonthImg
                src={`${BASE_URL}${Movie?.image}`}
                onClick={() =>
                  navigate(`/reservation/${id}`, {
                    state: `${BASE_URL}${Movie?.image}`,
                  })
                }
              />
              <p>{Movie?.genre}</p>
              <h2>
                <Link to={`/reservation/${id}`} state={`${BASE_URL}${Movie?.image}`}>
                  {Movie?.title}
                </Link>
              </h2>
              <MoviesMonthScreeningContainer>
                {map(movieTime(Screenings), (item, index) => (
                  <MoviesMonthScreeningItem key={index}>{item}</MoviesMonthScreeningItem>
                ))}
              </MoviesMonthScreeningContainer>
            </NowShowingStackHome>
          </ColStyled>
        ))}
      </ShowingToday>
    </>
  );
}
