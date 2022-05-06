import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { isEmpty } from "lodash";
import getNowShowingMovies from "../../../layouts/homePage/actions/getNowShowingMoviesAction";

export const useNowPlaying = () => {
  const { nowShowing } = useSelector((state) => state.nowPlaying);

  const dispatch = useDispatch();
  useEffect(() => {
    if (isEmpty(nowShowing)) dispatch(getNowShowingMovies());
  }, []);
};
