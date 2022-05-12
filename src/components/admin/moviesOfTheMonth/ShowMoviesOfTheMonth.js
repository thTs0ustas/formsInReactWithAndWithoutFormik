import { Table } from "react-bootstrap";
import { keys } from "lodash";
import PropTypes from "prop-types";
import TableBody from "./TableBody";
import { columns } from "./data/columns";
import { useMoviesOfTheMonthTable } from "./hooks/useMoviesOfTheMonthTable";
import { PaginationBasic, TableHead } from "../components";
import { PaginationContainer, SelectInput, TableHeader } from "./styledComponents";
import { dividers } from "./data/dividers";

function ShowMoviesOfTheMonth({ eventK }) {
  const { page, setPage, setItemsPerPage, numberOfPages, tableData, handleSort, itemsPerPage } =
    useMoviesOfTheMonthTable(eventK);

  return (
    <div>
      <Table bordered hover style={{ backgroundColor: "white" }}>
        <TableHead {...{ columns, handleSorting: handleSort, TableHeader }} />
        <TableBody {...{ columns, tableData }} />
      </Table>
      <PaginationContainer>
        <PaginationBasic page={page} setPage={setPage} numberOfPages={numberOfPages} />
        <SelectInput onChange={(e) => setItemsPerPage(e.target.value)} value={itemsPerPage}>
          {keys(dividers).map((item) => (
            <option key={item} value={dividers[item]}>
              {dividers[item]}
            </option>
          ))}
        </SelectInput>
      </PaginationContainer>
    </div>
  );
}
ShowMoviesOfTheMonth.propTypes = {
  eventK: PropTypes.string.isRequired,
};
export { ShowMoviesOfTheMonth };
