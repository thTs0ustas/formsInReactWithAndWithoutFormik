import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "lodash";
import getAdminMovieOfTheMonthAction from "../actions/getAdminMovieOfTheMonthAction";

const useMoviesOfTheMonthTable = (eventK) => {
  const { id, token } = useSelector((state) => state.user);
  const { moviesOfTheMonth } = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  // console.log(eventK);
  useEffect(() => {
    if (eventK === "moviesOfTheMonth" && isEmpty(moviesOfTheMonth))
      dispatch(getAdminMovieOfTheMonthAction({ id, token }));
  }, [eventK]);
};

export { useMoviesOfTheMonthTable };
