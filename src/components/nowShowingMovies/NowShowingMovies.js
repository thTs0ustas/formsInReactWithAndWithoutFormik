import React from "react";
import {
  ColStyledNowPlaying,
  MoviesMonthImg,
  NowShowing,
} from "../moviesOfTheMonth/styledComponents/styles";
import { useNowShowingMovies } from "./hooks/useNowShowingMovies";
import { map } from "lodash";
import { Link } from "react-router-dom";
import { NowShowingStack } from "./styledComponents/styles";
import { useDispatch, useSelector } from "react-redux";
import getMovieAction from "./actions/getMovieAction";
import { BASE_URL } from "../../constants";

export const NowShowingMovies = () => {
  const { nowShowing } = useSelector((state) => state.nowPlaying);
  const dispatch = useDispatch();

  useNowShowingMovies();

  return (
    <>
      <NowShowing>
        {map(nowShowing, ({ Movie: { id, title, genre, image } }) => (
          <ColStyledNowPlaying key={id}>
            <NowShowingStack>
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
          </ColStyledNowPlaying>
        ))}
      </NowShowing>
    </>
  );
};
