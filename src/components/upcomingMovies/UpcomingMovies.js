import React from "react";
import {
  ColStyledNowPlaying,
  MoviesMonthImg,
  NowShowing,
} from "../moviesOfTheMonth/styledComponents/styles";
import { useUpcomingMovies } from "./hooks/useUpcomingMovies";
import { useProvider } from "../../model";
import { map } from "lodash";
import { Link } from "react-router-dom";
import { NowShowingStack } from "./styledComponents/styles";

export const UpcomingMovies = () => {
  useUpcomingMovies();
  const [{ upcoming, BASE_URL }] = useProvider();
  return (
    <>
      <NowShowing>
        {map(upcoming[0], ({ id, title, genre, image }) => (
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
