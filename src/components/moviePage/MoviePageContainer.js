import React, { useEffect } from "react";
import MainPhoto from "./MainPhoto";
import MainText from "./MainText";
import { useParams } from "react-router-dom";
import getMovieAction from "./actions/getMovieAction";
import { useDispatch, useSelector } from "react-redux";
import { clearMovieInfo } from "../../rModel/reducers/miscReducer/miscReducer";

const MoviePageContainer = () => {
  const dispatch = useDispatch();
  const { movieInfo = {} } = useSelector((state) => state.movieInfo);
  const { movie, screenings } = movieInfo;
  const { id } = useParams();

  useEffect(() => {
    dispatch(getMovieAction(id));
    return () => {
      dispatch(clearMovieInfo());
    };
  }, []);

  return (
    <div>
      <MainPhoto image={movie?.image} title={movie?.title} />
      <MainText movie={movie} screenings={screenings} id={id} />
    </div>
  );
};

export default MoviePageContainer;
