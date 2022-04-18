import { adminUsersAction, selectors, useProvider } from "../../../../model";
import { useEffect, useState } from "react";
import axios from "axios";
import { handleError } from "../../../../model/actions";

const useAdminTable = (eventK) => {
  const [state, dispatch] = useProvider([selectors.url, selectors.token, selectors.username]);

  const [tableData, setTableData] = useState([]);
  const [updateTable, setUpdateTable] = useState(true);

  useEffect(() => {
    if (eventK === "users") {
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
  }, [eventK, updateTable]);

  return { tableData, setUpdateTable, setTableData, updateTable };
};

export { useAdminTable };
