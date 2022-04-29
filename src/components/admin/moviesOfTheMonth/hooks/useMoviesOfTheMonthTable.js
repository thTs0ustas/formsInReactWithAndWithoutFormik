import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getAdminMovieOfTheMonthAction from "../actions/getAdminMovieOfTheMonthAction";

const useMoviesOfTheMonthTable = ({ eventK, empty }) => {
  const { id, token } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (eventK === "moviesOfTheMonth" && empty)
      dispatch(getAdminMovieOfTheMonthAction({ id, token }));
  }, []);
};

export { useMoviesOfTheMonthTable };
