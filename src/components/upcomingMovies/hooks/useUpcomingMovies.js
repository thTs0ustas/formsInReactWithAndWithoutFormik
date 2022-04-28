import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "lodash";
import getUpcomingAction from "../../../layouts/homePage/actions/getUpcomingAction";

export const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const { upcomingMovies } = useSelector((state) => state.nowPlaying);

  useEffect(() => {
    if (isEmpty(upcomingMovies)) dispatch(getUpcomingAction());
  }, [dispatch]);
};
