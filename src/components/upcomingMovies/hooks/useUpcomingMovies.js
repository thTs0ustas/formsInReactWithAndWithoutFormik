import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getUpcomingAction from "../../../layouts/homePage/actions/getUpcomingAction";
import { isEmpty } from "lodash";

export const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const { upcomingMovies } = useSelector((state) => state.nowPlaying);

  useEffect(() => {
    isEmpty(upcomingMovies) && dispatch(getUpcomingAction());
  }, [dispatch]);
};
