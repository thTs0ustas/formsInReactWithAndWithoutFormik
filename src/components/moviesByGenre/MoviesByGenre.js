import React from "react";
import {
  ColStyledNowPlaying,
  MoviesMonthImg,
  NowShowing,
} from "../moviesOfTheMonth/styledComponents/styles";
import { useMoviesByGenre } from "./hooks/useMoviesByGenre";
import { map } from "lodash";
import { Link } from "react-router-dom";
import { NowShowingStack } from "./styledComponents/styles";
import { useSelector } from "react-redux";
import { BASE_URL } from "../../constants";

export const MoviesByGenre = ({ genre }) => {
  const { moviesByGenre } = useSelector((state) => state.nowPlaying);
  useMoviesByGenre(genre);

  return (
    <>
      <NowShowing>
        {map(moviesByGenre, ({ id, title, genre, image }) => (
          <ColStyledNowPlaying key={id}>
            <NowShowingStack>
              <Link to={`/moviePage/${id}`}>
                <MoviesMonthImg src={`${BASE_URL}${image}`} />
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
