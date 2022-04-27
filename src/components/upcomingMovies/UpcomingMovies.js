import React from "react";
import {
  ColStyledNowPlaying,
  MoviesMonthImg,
  NowShowing,
} from "../moviesOfTheMonth/styledComponents/styles";
import { useUpcomingMovies } from "./hooks/useUpcomingMovies";
import { map } from "lodash";
import { Link } from "react-router-dom";
import { NowShowingStack } from "./styledComponents/styles";
import { useSelector } from "react-redux";
import { BASE_URL } from "../../constants";

export const UpcomingMovies = () => {
  useUpcomingMovies();
  const { upcomingMovies } = useSelector((state) => state.nowPlaying);
  return (
    <>
      <NowShowing>
        {map(upcomingMovies, ({ id, title, genre, image }) => (
          <ColStyledNowPlaying key={id}>
            <NowShowingStack key={id}>
              <Link to={`/moviePage/${id}`}>
                <MoviesMonthImg src={`${BASE_URL}${image}`} />
              </Link>
              <p>{genre?.replace(/^\w/, (c) => c.toUpperCase())}</p>
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
