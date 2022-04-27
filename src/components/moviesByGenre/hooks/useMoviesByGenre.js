import { useEffect } from "react";
import { useDispatch } from "react-redux";
import moviesByGenreAction from "../actions/moviesByGenreActions";
import { clearMoviesByGenre } from "../../../rModel/reducers/moviePageReducer/moviePageReducer";

export const useMoviesByGenre = (genre) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(moviesByGenreAction(genre));
    return () => {
      dispatch(clearMoviesByGenre());
    };
  }, [genre, dispatch]);
};
