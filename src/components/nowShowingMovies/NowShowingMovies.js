import React from "react";
import {
  ColStyledNowPlaying,
  MoviesMonthImg,
  NowShowing,
} from "../moviesOfTheMonth/styledComponents/styles";
import { useNowShowingMovies } from "./hooks/useNowShowingMovies";
import { useProvider } from "../../model";
import { map } from "lodash";
import { Link } from "react-router-dom";
import { NowShowingStack } from "./styledComponents/styles";

export const NowShowingMovies = () => {
  useNowShowingMovies();
  const [state] = useProvider();

  return (
    <>
      <NowShowing>
        {map(state.homepage.movies[0], ({ Movie: { id, title, genre, image } }) => (
          <ColStyledNowPlaying key={id}>
            <NowShowingStack>
              <Link to={`/moviePage/${id}`}>
                <MoviesMonthImg src={`${state.BASE_URL}${image}`} />
              </Link>
              <p>{genre.replace(/^\w/, (c) => c.toUpperCase())}</p>
              <h2>
                <Link to={`/moviePage/${id}`}>{title}</Link>
              </h2>
            </NowShowingStack>
          </ColStyledNowPlaying>
        ))}
      </NowShowing>
    </>
  );
};
