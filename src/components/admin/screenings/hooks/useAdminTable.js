import { useEffect, useState } from "react";
import axios from "axios";
import { adminUsersAction, selectors, useProvider } from "../../../../model";
import { handleError } from "../../../../model/actions";
import { handleData } from "../helpers/handleData";

const useAdminTable = (eventK) => {
  const [state, dispatch] = useProvider([selectors.url, selectors.token, selectors.username]);

  const [tableData, setTableData] = useState([]);
  const [updateTable, setUpdateTable] = useState(true);
  const [deletePrompt, setDeletePrompt] = useState(false);

  useEffect(() => {
    if (eventK === "screenings" || deletePrompt) {
      axios
        .get(`${state.BASE_URL}/admin/${state.username}/getScreenings`, {
          headers: {
            authorization: `Bearer ${state.token}`,
          },
        })
        .then(({ data }) => {
          setTableData(() => [...handleData(data)]);
          setDeletePrompt(false);
          dispatch(adminUsersAction(data));
        })
        .then(() => deletePrompt && setDeletePrompt(false))
        .catch((error) =>
          dispatch(handleError({ message: error.message, time: new Date().getTime() }))
        );
    }
  }, [eventK, updateTable, deletePrompt]);

  return { tableData, setUpdateTable, setTableData, updateTable, setDeletePrompt };
};

export { useAdminTable };
