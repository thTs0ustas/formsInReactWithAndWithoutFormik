import { Table } from "react-bootstrap";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import { handleSorting } from "./helpers/handleSorting";
import { columns } from "./data/columns";
import { handleUpdateTable } from "./helpers/handleUpdateTable";
import { useAdminTable } from "./hooks/useAdminTable";
import { chunk, keys } from "lodash";
import { useState } from "react";
import { PaginationBasic } from "./pagination/Pagination";
import { TableContainer } from "./styledComponents/TableContainer";

const ShowMovies = ({ eventK }) => {
  const dividers = {
    fifty: 50,
    twenty: 20,
    ten: 10,
  };
  const { tableData, setUpdateTable, setTableData, updateTable } = useAdminTable(eventK);

  const [itemsPerPage, setItemsPerPage] = useState(dividers.twenty);
  const [page, setPage] = useState(0);
  const PER_PAGES = Math.floor(tableData.length / (tableData.length / itemsPerPage));
  const slices = chunk(tableData, PER_PAGES);
  const numberOfPages = slices.length;

  return (
    <TableContainer>
      <Table bordered hover style={{ backgroundColor: "white" }}>
        <TableHead {...{ columns, handleSorting: handleSorting(tableData, setTableData) }} />
        <TableBody
          {...{
            columns,
            tableData: slices[page],
            handleUpdateTable: handleUpdateTable(updateTable, setUpdateTable),
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
            <option value={dividers[item]}>{dividers[item]}</option>
          ))}
        </select>
      </div>
    </TableContainer>
  );
};

export { ShowMovies };
