import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getNowShowingMovies from "../actions/getNowShowingMoviesAction";
import { isEmpty } from "lodash";

export const useNowShowingMovies = () => {
  const dispatch = useDispatch();
  const { nowShowing } = useSelector((state) => state.nowPlaying);
  useEffect(() => {
    isEmpty(nowShowing) && dispatch(getNowShowingMovies());
  }, [dispatch]);
};
