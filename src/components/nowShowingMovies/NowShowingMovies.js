import React from "react";
import { map } from "lodash";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { NowShowingStack } from "./styledComponents/styles";
import { MoviesMonthImg, NowShowing } from "../moviesOfTheMonth/styledComponents/styles";
import getMovieAction from "./actions/getMovieAction";
import { BASE_URL } from "../../constants";
import { useNowPlaying } from "./hooks/useNowPlaying";

export function NowShowingMovies() {
  const { nowShowing } = useSelector((state) => state.nowPlaying);
  const dispatch = useDispatch();
  useNowPlaying();
  return (
    <NowShowing>
      {map(nowShowing, ({ Movie: { id, title, genre, image } }) => (
        <NowShowingStack key={id}>
          <Link onClick={() => dispatch(getMovieAction(id))} to={`/moviePage/${id}`}>
            <MoviesMonthImg src={`${BASE_URL}${image}`} />
          </Link>
          <p>{genre}</p>
          <h2>
            <Link onClick={() => dispatch(getMovieAction(id))} to={`/moviePage/${id}`}>
              {title}
            </Link>
          </h2>
        </NowShowingStack>
      ))}
    </NowShowing>
  );
}
