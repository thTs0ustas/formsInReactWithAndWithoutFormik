import { adminMoviesAction, selectors, useProvider } from "../../../../model";
import { useEffect, useState } from "react";
import axios from "axios";
import { handleError } from "../../../../model/actions";

const useAdminTable = (eventK) => {
  const [state, dispatch] = useProvider([selectors.admin, selectors.url]);
  const [tableData, setTableData] = useState([]);
  const [updateTable, setUpdateTable] = useState(true);

  useEffect(() => {
    if (eventK === "movies") {
      axios
        .get(`${state.BASE_URL}/movies`)
        .then(({ data }) => {
          setTableData(() => [...data]);
          dispatch(adminMoviesAction(data));
        })
        .catch((error) =>
          dispatch(handleError({ message: error.message, time: new Date().getTime() }))
        );
    }
  }, [eventK, updateTable]);

  return { tableData, setUpdateTable, setTableData, updateTable };
};

export { useAdminTable };
