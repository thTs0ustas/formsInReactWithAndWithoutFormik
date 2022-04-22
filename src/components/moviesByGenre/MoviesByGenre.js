import React from "react";
import {
  ColStyledNowPlaying,
  MoviesMonthImg,
  NowShowing,
} from "../moviesOfTheMonth/styledComponents/styles";
import { useMoviesByGenre } from "./hooks/useMoviesByGenre";
import { useProvider } from "../../model";
import { map } from "lodash";
import { Link, Outlet } from "react-router-dom";
import { NowShowingStack } from "./styledComponents/styles";

export const MoviesByGenre = ({ genre }) => {
  const [{ moviesByGenre, BASE_URL }] = useProvider();
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
      <Outlet />
    </>
  );
};
