import React, { useEffect } from "react";
import MainPhoto from "./MainPhoto";
import MainText from "./MainText";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearMovieInfo } from "../../rModel/reducers/moviePageReducer/moviePageReducer";
import { isEmpty } from "lodash";
import { PlaceholderComp } from "./placeholder/placehorlder";
import getMovieAction from "../nowShowingMovies/actions/getMovieAction";

const MoviePageContainer = () => {
  const dispatch = useDispatch();
  const { movieInfo = {} } = useSelector((state) => state.nowPlaying);
  const { movie, screenings } = movieInfo;
  const { id } = useParams();

  useEffect(() => {
    if (isEmpty(movieInfo)) {
      dispatch(getMovieAction(id));
    }
    return () => {
      dispatch(clearMovieInfo());
    };
  }, [dispatch]);

  return (
    <div>
      <MainPhoto image={movie?.image} title={movie?.title} />
      {isEmpty(movieInfo) ? (
        <PlaceholderComp />
      ) : (
        <MainText movie={movie} screenings={screenings} id={id} />
      )}
    </div>
  );
};

export default MoviePageContainer;
