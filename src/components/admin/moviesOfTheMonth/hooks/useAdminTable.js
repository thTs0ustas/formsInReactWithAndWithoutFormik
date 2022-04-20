import { adminUsersAction, selectors, useProvider } from "../../../../model";
import { useEffect, useState } from "react";
import axios from "axios";
import { handleError } from "../../../../model/actions";
import { handleData } from "../helpers/handleData";

const useAdminTable = (eventK) => {
  const [state, dispatch] = useProvider([
    selectors.url,
    selectors.token,
    selectors.username,
    selectors.admin,
  ]);

  const [tableData, setTableData] = useState([]);
  const [updateTable, setUpdateTable] = useState(true);
  const [deletePrompt, setDeletePrompt] = useState(false);

  useEffect(() => {
    axios
      .get(`${state.BASE_URL}/admin/${state.username}/getMoviesOfTheMonth`, {
        headers: {
          authorization: `Bearer ${state.token}`,
        },
      })
      .then(({ data }) => {
        setTableData(() => [...handleData(data)]);
        dispatch(adminUsersAction(data));
      })
      .then(() => deletePrompt && setDeletePrompt(false))
      .catch((error) =>
        dispatch(handleError({ message: error.message, time: new Date().getTime() }))
      );
  }, [eventK, updateTable, deletePrompt]);

  return { tableData, setUpdateTable, setTableData, updateTable, setDeletePrompt };
};

export { useAdminTable };
