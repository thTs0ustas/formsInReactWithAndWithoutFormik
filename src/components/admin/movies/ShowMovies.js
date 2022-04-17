import { Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { adminMoviesAction, selectors, useProvider } from "../../../model";
import { handleError } from "../../../model/actions";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

const ShowMovies = ({ eventK }) => {
  const [state, dispatch] = useProvider([selectors.admin, selectors.url]);
  const [tableData, setTableData] = useState([]);
  const [updateTable, setUpdateTable] = useState(true);
  const handleUpdateTable = () => setUpdateTable(!updateTable);
  useEffect(() => {
    if (eventK === "movies") {
      axios
        .get(`${state.BASE_URL}/movies`)
        .then(({ data }) => {
          console.log(data);
          setTableData(() => [...data]);
          dispatch(adminMoviesAction(data));
        })
        .catch((error) =>
          dispatch(handleError({ message: error.message, time: new Date().getTime() }))
        );
    }
  }, [eventK, updateTable]);

  const columns = [
    { label: "#", accessor: "id", sortable: true },
    { label: "Title", accessor: "title", sortable: true },
    { label: "Description", accessor: "description", sortable: false },
    { label: "Duration", accessor: "duration", sortable: true },
    { label: "Genre", accessor: "genre", sortable: true },
    { label: "Release Year", accessor: "release_year", sortable: true },
  ];

  const handleSorting = (sortField, sortOrder) => {
    if (sortField) {
      const sorted = [...tableData].sort((a, b) => {
        if (a[sortField] === null) return 1;
        if (b[sortField] === null) return -1;
        if (a[sortField] === null && b[sortField] === null) return 0;
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      setTableData(sorted);
    }
  };
  return (
    <div style={{ width: "80vw", margin: "0 auto" }}>
      <Table bordered hover style={{ backgroundColor: "white" }}>
        <TableHead {...{ columns, handleSorting }} />
        <TableBody {...{ columns, tableData, handleUpdateTable }} />
      </Table>
    </div>
  );
};

export { ShowMovies };
