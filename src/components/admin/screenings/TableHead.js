import { useState } from "react";
import PropTypes from "prop-types";
import { TableHeader } from "./styledComponents/TableData";

function TableHead({ columns, handleSorting }) {
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");

  const handleSortingChange = (accessor) => {
    const sortOrder = accessor === sortField && order === "asc" ? "desc" : "asc";
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };

  return (
    <thead>
      <tr>
        {columns.map(({ label, accessor, sortable }) => {
          const cl = sortable
            ? sortField && sortField === accessor && order === "asc"
              ? "up"
              : sortField && sortField === accessor && order === "desc"
              ? "down"
              : "default"
            : "";
          return (
            <TableHeader
              key={accessor}
              onClick={sortable ? () => handleSortingChange(accessor) : null}
              sort={cl}
              sortable={sortable}
            >
              {label}
            </TableHeader>
          );
        })}
      </tr>
    </thead>
  );
}
TableHead.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      accessor: PropTypes.string.isRequired,
      sortable: PropTypes.bool,
    })
  ).isRequired,
  handleSorting: PropTypes.func.isRequired,
};

export default TableHead;
