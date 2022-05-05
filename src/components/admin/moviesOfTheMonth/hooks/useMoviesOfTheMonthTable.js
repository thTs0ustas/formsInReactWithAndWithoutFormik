import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "lodash";
import getAdminMovieOfTheMonthAction from "../actions/getAdminMovieOfTheMonthAction";
import { userAdminSelector } from "../selectors/selectors";

const useMoviesOfTheMonthTable = (eventK) => {
  const { id, token, moviesOfTheMonth } = useSelector((state) => userAdminSelector(state));

  const dispatch = useDispatch();
  // console.log(eventK);
  useEffect(() => {
    if (eventK === "moviesOfTheMonth" && isEmpty(moviesOfTheMonth))
      dispatch(getAdminMovieOfTheMonthAction({ id, token }));
  }, [eventK]);
};

export { useMoviesOfTheMonthTable };
