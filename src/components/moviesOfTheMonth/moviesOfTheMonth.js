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

import { chunk, map } from "lodash";
import { Link } from "react-router-dom";

import { NowShowingStackHome } from "../nowShowingMovies/styledComponents/styles";

export const MoviesOfTheMonth = () => {
  // const today = new Date().getDay();
  // const movieDate = (movie_starts) => new Date(movie_starts).getDay();

  // const [index, setIndex] = useState(0);
  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };

  useMoviesOfTheMonth();
  const [state] = useProvider();
  let slices = chunk(state.homepage.movies[0], 3);

  return (
    <>
      <TitleHeader>
        <h2>
          <span>FILMS SHOWING TODAY</span>
        </h2>
        <Link to={`/nowPlaying`}>
          <p>See all films & session times</p>
        </Link>
      </TitleHeader>
      <ShowingToday>
        {map(slices, (slice) => {
          return map(slice, ({ id: mOmId, Screenings, Movie: { id, title, genre, image } }) => {
            console.log(slice);
            return (
              <ColStyled key={id}>
                <NowShowingStackHome>
                  <MoviesMonthImg src={`${state.BASE_URL}${image}`} />
                  <p>{genre.replace(/^\w/, (c) => c?.toUpperCase())}</p>
                  <h2>
                    <Link to={`/reservation/${mOmId}`} state={`http://localhost:4000${image}`}>
                      {title}
                    </Link>
                  </h2>
                  <MoviesMonthScreeningContainer>
                    {map(Screenings, ({ id, movie_starts }) => (
                      <MoviesMonthScreeningItem key={id}>
                        {movie_starts.split("T")[1].slice(0, 5)}
                      </MoviesMonthScreeningItem>
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
