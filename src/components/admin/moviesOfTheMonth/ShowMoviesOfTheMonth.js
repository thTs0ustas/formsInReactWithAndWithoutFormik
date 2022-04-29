import { Table } from "react-bootstrap";
import { chunk, isEmpty, keys } from "lodash";
import { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import { handleSorting } from "./helpers/handleSorting";
import { columns } from "./data/columns";
import { useMoviesOfTheMonthTable } from "./hooks/useMoviesOfTheMonthTable";
import { PaginationBasic } from "./pagination/Pagination";

function ShowMoviesOfTheMonth({ eventK }) {
  const dividers = {
    fifty: 50,
    twenty: 20,
    ten: 10,
  };

  const { moviesOfTheMonth } = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  useMoviesOfTheMonthTable({ eventK, empty: isEmpty(moviesOfTheMonth) });
  const [itemsPerPage, setItemsPerPage] = useState(dividers.twenty);
  const [page, setPage] = useState(0);

  const slices = chunk(moviesOfTheMonth, itemsPerPage);

  const numberOfPages = slices.length;

  return (
    <div style={{ width: "80vw", margin: "0 auto" }}>
      <Table bordered hover style={{ backgroundColor: "white" }}>
        <TableHead {...{ columns, handleSorting: handleSorting(moviesOfTheMonth, dispatch) }} />
        <TableBody
          {...{
            columns,
            tableData: slices[page],
          }}
        />
      </Table>
      <div
        style={{
          display: "flex",
          fontSize: 18,
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <PaginationBasic page={page} setPage={setPage} numberOfPages={numberOfPages} />
        <select
          style={{ height: 38, width: 48, display: "block" }}
          onChange={(e) => setItemsPerPage(e.target.value)}
          value={itemsPerPage}
        >
          {keys(dividers).map((item) => (
            <option key={item} value={dividers[item]}>
              {dividers[item]}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
ShowMoviesOfTheMonth.propTypes = {
  eventK: PropTypes.string.isRequired,
};
export { ShowMoviesOfTheMonth };
