import React from "react";

import { map } from "lodash";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { MoviesMonthImg, NowShowing } from "../moviesOfTheMonth/styledComponents/styles";
import { useMoviesByGenre } from "./hooks/useMoviesByGenre";
import { NowShowingStack } from "./styledComponents/styles";
import { BASE_URL } from "../../constants";

export function MoviesByGenre({ genre }) {
  const { moviesByGenre } = useSelector((state) => state.nowPlaying);
  useMoviesByGenre(genre);
  return (
    <NowShowing>
      {map(moviesByGenre, ({ id, title, genre: genreType, image }) => (
        <NowShowingStack key={id}>
          <Link to={`/moviePage/${id}`}>
            <MoviesMonthImg src={`${BASE_URL}${image}`} />
          </Link>
          <p>{genreType}</p>
          <h2>
            <Link to={`/moviePage/${id}`}>{title}</Link>
          </h2>
        </NowShowingStack>
      ))}
    </NowShowing>
  );
}
MoviesByGenre.propTypes = {
  genre: PropTypes.string.isRequired,
};
