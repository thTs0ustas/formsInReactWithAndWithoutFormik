import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "lodash";
import getNowShowingMovies from "../actions/getNowShowingMoviesAction";

export const useNowShowingMovies = () => {
  const dispatch = useDispatch();
  const { nowShowing } = useSelector((state) => state.nowPlaying);
  useEffect(() => {
    if (isEmpty(nowShowing)) dispatch(getNowShowingMovies());
  }, [dispatch]);
};
