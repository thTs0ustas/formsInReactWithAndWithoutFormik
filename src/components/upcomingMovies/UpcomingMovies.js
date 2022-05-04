import React from "react";
import { map } from "lodash";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { MoviesMonthImg, NowShowing } from "../moviesOfTheMonth/styledComponents/styles";
import { useUpcomingMovies } from "./hooks/useUpcomingMovies";
import { NowShowingStack } from "./styledComponents/styles";
import { BASE_URL } from "../../constants";

export function UpcomingMovies() {
  useUpcomingMovies();
  const { upcomingMovies } = useSelector((state) => state.nowPlaying);
  return (
    <NowShowing>
      {map(upcomingMovies, ({ id, title, genre, image }) => (
        <NowShowingStack key={id}>
          <Link to={`/moviePage/${id}`}>
            <MoviesMonthImg src={`${BASE_URL}${image}`} />
          </Link>
          <p>{genre}</p>
          <h2>
            <Link to={`/moviePage/${id}`}>{title}</Link>
          </h2>
        </NowShowingStack>
      ))}
    </NowShowing>
  );
}
