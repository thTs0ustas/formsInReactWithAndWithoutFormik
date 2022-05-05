import { Table } from "react-bootstrap";
import { chunk, keys } from "lodash";
import { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
// import TableHead from "./TableHead";
import TableBody from "./TableBody";
import { handleSorting } from "./helpers/handleSorting";
import { columns } from "./data/columns";
import { useMoviesTable } from "./hooks/useMoviesTable";
import { PaginationBasic } from "./pagination/Pagination";
import { TableHead } from "../components";
import { TableHeader } from "./styledComponents/TableData";

function ShowMovies({ eventK }) {
  const dividers = {
    fifty: 50,
    twenty: 20,
    ten: 10,
  };
  const { movies } = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  const [itemsPerPage, setItemsPerPage] = useState(dividers.twenty);
  const [page, setPage] = useState(0);

  const slices = chunk(movies, itemsPerPage);
  const numberOfPages = slices.length;
  useMoviesTable(eventK);

  return (
    <div>
      <Table
        bordered
        hover
        style={{
          backgroundColor: "aliceblue",
          overflow: "auto",
          display: "block",
          tableLayout: "auto",
        }}
      >
        <TableHead {...{ columns, handleSorting: handleSorting(movies, dispatch), TableHeader }} />
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
ShowMovies.propTypes = {
  eventK: PropTypes.string.isRequired,
};
export { ShowMovies };
