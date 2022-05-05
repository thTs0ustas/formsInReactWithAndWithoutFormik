import { Table } from "react-bootstrap";
import { chunk, keys } from "lodash";
import { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import TableBody from "./TableBody";
import { handleSorting } from "./helpers/handleSorting";
import { columns } from "./data/columns";
import { useAdminScreeningsTable } from "./hooks/useAdminScreeningsTable";
import { PaginationBasic } from "./pagination/Pagination";
import { TableHead } from "../components";
import { TableHeader } from "./styledComponents/TableData";
import { adminSelector } from "./selectors/selectors";

function ShowScreenings({ eventK }) {
  const dividers = {
    fifty: 50,
    twenty: 20,
  };
  useAdminScreeningsTable(eventK);
  const { screenings } = useSelector(adminSelector);
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(dividers.twenty);

  const slices = chunk(screenings, itemsPerPage);

  const numberOfPages = slices.length;

  return (
    <div style={{ width: "80vw", margin: "0 auto" }}>
      <Table bordered hover style={{ backgroundColor: "white" }}>
        <TableHead
          {...{ columns, handleSorting: handleSorting(screenings, dispatch), TableHeader }}
        />
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

ShowScreenings.propTypes = {
  eventK: PropTypes.string.isRequired,
};

export { ShowScreenings };
