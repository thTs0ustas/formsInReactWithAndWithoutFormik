import { useEffect } from "react";
import { useDispatch } from "react-redux";
import getTodayMoviesAction from "../actions/getTodayMoviesAction";

export const useMoviesOfTheMonth = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodayMoviesAction());
  }, [dispatch]);
};
