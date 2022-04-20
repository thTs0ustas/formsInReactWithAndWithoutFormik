import React, { useState } from "react";
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
// import { ButtonIcon, CarouselButton } from "./";
import { chunk, map } from "lodash";
import { Link } from "react-router-dom";
import "./moviesOfTheMonth.css";

export const MoviesOfTheMonth = () => {
  const today = new Date().getDay();
  const movieDate = (movie_starts) => new Date(movie_starts).getDay();

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useMoviesOfTheMonth();
  const [state, dispatch] = useProvider();
  let slices = chunk(state.homepage.movies[0], 3);
  console.log(slices);

  return (
    <>
      <TitleHeader>
        <h2>FILMS SHOWING TODAY</h2>
        <Link to={`/nowshowing`}>
          <p>See all films & session times</p>
        </Link>
      </TitleHeader>
      <ShowingToday>
        {map(slices, (slice, i) => {
          return map(
            slice,
            ({ Screenings, Movie: { id, title, genre, image, Screening } }) => {
              {
                /* if(today === movieDate(movie_starts)) */
              }
              return (
                <ColStyled key={id}>
                  <div>
                    <MoviesMonthImg src={`${state.BASE_URL}${image}`} />
                    <p>{genre.replace(/^\w/, (c) => c?.toUpperCase())}</p>
                    <h2>
                      <Link to={`/reservation/${id}`}>{title}</Link>
                    </h2>
                    <MoviesMonthScreeningContainer>
                      {map(Screenings, ({ id, movie_starts }) => (
                        <MoviesMonthScreeningItem key={id}>
                          {movie_starts.split("T")[1].slice(0, 5)}
                        </MoviesMonthScreeningItem>
                      ))}
                    </MoviesMonthScreeningContainer>
                  </div>
                </ColStyled>
              );
            }
          );
        })}
      </ShowingToday>
    </>
  );
};
