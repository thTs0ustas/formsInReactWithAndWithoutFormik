import { adminUsersAction, selectors, useProvider } from "../../../../model";
import { useEffect, useState } from "react";
import axios from "axios";
import { handleError } from "../../../../model/actions";

const useAdminTable = (eventK) => {
  const [state, dispatch] = useProvider([selectors.url, selectors.token, selectors.username]);

  const [tableData, setTableData] = useState([]);
  const [updateTable, setUpdateTable] = useState(true);
  const [deletePrompt, setDeletePrompt] = useState(false);

  useEffect(() => {
    if (eventK === "users" || deletePrompt) {
      axios
        .get(`${state.BASE_URL}/admin/${state.username}/getUsers`, {
          headers: {
            authorization: `Bearer ${state.token}`,
          },
        })
        .then(({ data }) => {
          setTableData(() => [...data]);
          dispatch(adminUsersAction(data));
        })
        .catch((error) =>
          dispatch(handleError({ message: error.message, time: new Date().getTime() }))
        );
    }
  }, [eventK, updateTable, deletePrompt]);

  return { tableData, setUpdateTable, setTableData, updateTable, setDeletePrompt };
};

export { useAdminTable };
