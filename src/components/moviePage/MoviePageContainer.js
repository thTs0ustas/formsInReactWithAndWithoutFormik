import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "lodash";
import MainPhoto from "./MainPhoto";
import MainText from "./MainText";
import { clearMovieInfo } from "../../rModel/reducers/moviePageReducer/moviePageReducer";
import { PlaceholderComp } from "./placeholder/placehorlder";
import getMovieAction from "../nowShowingMovies/actions/getMovieAction";

function MoviePageContainer() {
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
}

export default MoviePageContainer;
