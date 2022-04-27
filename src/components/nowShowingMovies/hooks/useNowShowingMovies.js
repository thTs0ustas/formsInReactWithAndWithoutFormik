import { useEffect } from "react";
import { useDispatch } from "react-redux";
import getNowShowingMovies from "../actions/getNowShowingMoviesAction";

export const useNowShowingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNowShowingMovies());
  }, [dispatch]);
};
