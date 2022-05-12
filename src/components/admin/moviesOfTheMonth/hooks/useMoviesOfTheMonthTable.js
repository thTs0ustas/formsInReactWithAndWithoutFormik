import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { chunk, isEmpty } from "lodash";
import getAdminMovieOfTheMonthAction from "../actions/getAdminMovieOfTheMonthAction";
import { userAdminSelector } from "../selectors/selectors";
import { dividers } from "../data/dividers";
import { handleSorting } from "../helpers/handleSorting";

const useMoviesOfTheMonthTable = (eventK) => {
  const dispatch = useDispatch();
  const { id, token, moviesOfTheMonth } = useSelector((state) => userAdminSelector(state));

  const [itemsPerPage, setItemsPerPage] = useState(dividers.twenty);
  const [page, setPage] = useState(0);
  const slices = chunk(moviesOfTheMonth, itemsPerPage);

  const numberOfPages = slices.length;
  const tableData = slices[page];
  const handleSort = handleSorting(moviesOfTheMonth, dispatch);

  // console.log(eventK);
  useEffect(() => {
    if (eventK === "moviesOfTheMonth" && isEmpty(moviesOfTheMonth))
      dispatch(getAdminMovieOfTheMonthAction({ id, token }));
  }, [eventK]);

  return { page, setPage, setItemsPerPage, numberOfPages, tableData, handleSort, itemsPerPage };
};

export { useMoviesOfTheMonthTable };
