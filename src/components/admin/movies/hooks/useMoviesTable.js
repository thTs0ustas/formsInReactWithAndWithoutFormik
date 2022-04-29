import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "lodash";
import getAdminMovieAction from "../actions/getAdminMovieAction";

const useMoviesTable = (eventK) => {
  const { id, token } = useSelector((state) => state.user);
  const { movies } = useSelector((state) => state.admin);

  const dispatch = useDispatch();
  const [updateTable, setUpdateTable] = useState(true);

  useEffect(() => {
    if (eventK === "movies" && isEmpty(movies)) {
      dispatch(getAdminMovieAction({ id, token }));
    }
  }, [eventK]);

  return { setUpdateTable, updateTable };
};

export { useMoviesTable };
