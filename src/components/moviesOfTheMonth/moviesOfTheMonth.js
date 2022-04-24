import React from "react";
import {
  ColStyled,
  MoviesMonthImg,
  MoviesMonthScreeningContainer,
  MoviesMonthScreeningItem,
  ShowingToday,
  TitleHeader,
} from "./styledComponents/styles";
import { useMoviesOfTheMonth } from "./hooks/useMoviesOfTheMonth";
import { useProvider } from "../../model";
import "bootstrap/dist/css/bootstrap.min.css";

import { map } from "lodash";
import { Link, useNavigate } from "react-router-dom";

import { NowShowingStackHome } from "../nowShowingMovies/styledComponents/styles";

export const MoviesOfTheMonth = () => {
  useMoviesOfTheMonth();
  const [state] = useProvider();

  let movieTime = (screenings) => [
    ...new Set(map(screenings, (item) => item.movie_starts.split("T")[1].slice(0, 5))),
  ];

  const navigate = useNavigate();
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
        {map(state.homepage?.movies, (slice) => {
          return map(slice, ({ id: mOmId, Screenings, Movie: { id, title, genre, image } }) => {
            return (
              <ColStyled key={id}>
                <NowShowingStackHome>
                  <MoviesMonthImg
                    src={`${state.BASE_URL}${image}`}
                    onClick={() =>
                      navigate(`/reservation/${mOmId}`, {
                        state: `${state.BASE_URL}${image}`,
                      })
                    }
                  />
                  <p>{genre.replace(/^\w/, (c) => c?.toUpperCase())}</p>
                  <h2>
                    <Link to={`/reservation/${mOmId}`} state={`${state.BASE_URL}${image}`}>
                      {title}
                    </Link>
                  </h2>
                  <MoviesMonthScreeningContainer>
                    {map(movieTime(Screenings), (item, index) => (
                      <MoviesMonthScreeningItem key={index}>{item}</MoviesMonthScreeningItem>
                    ))}
                  </MoviesMonthScreeningContainer>
                </NowShowingStackHome>
              </ColStyled>
            );
          });
        })}
      </ShowingToday>
    </>
  );
};
