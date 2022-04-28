import { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Button } from "react-bootstrap";
import axios from "axios";
import PropTypes from "prop-types";
import { Data } from "./styledComponents/Data";
import { decideTdData } from "./helpers/conditional";
import { AddNewMovieOfTheMonthForm } from "./AddNewMovieOfTheMonthForm/AddNewMovieOfTheMonthForm";
import { handleError } from "../../../model/actions";
import { selectors, useProvider } from "../../../model";

function TableBody({ tableData, columns, handleUpdateTable, setDeletePrompt }) {
  const [{ userInfo, BASE_URL }, dispatch] = useProvider([selectors.userInfo, selectors.url]);

  const [include, setInclude] = useState("");
  const [addNewModalShow, setAddNewModalShow] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    if (deleteId) {
      axios
        .delete(`${BASE_URL}/admin/${userInfo.username}/movieOfTheMonth/delete/${deleteId}`, {
          headers: {
            authorization: `Bearer ${userInfo.token}`,
          },
        })
        .then(() => setDeleteId(null))
        .then(() => setDeletePrompt(true))
        .catch((error) =>
          dispatch(handleError({ message: error.message, time: new Date().getTime() }))
        );
    }
  }, [deleteId]);
  return (
    <>
      <tbody>
        <tr>
          <td colSpan={6}>
            <Button onClick={() => setAddNewModalShow(true)} variant='primary'>
              Add New Movie
            </Button>
          </td>
        </tr>
        <tr>
          <td />
          <td />
          <td>
            <input onChange={(e) => setInclude(e.target.value)} />
          </td>
          <td />
          <td />
          <td />
        </tr>
        {tableData?.map(
          (data, i) =>
            data.title?.includes(include) && (
              <tr key={data.id}>
                {columns.map(({ accessor }) => {
                  const tData = decideTdData(data, accessor, RiDeleteBin6Line, i);
                  return (
                    <Data
                      key={accessor}
                      onClick={() => accessor !== "delete" || setDeleteId(data.id)}
                    >
                      {tData}
                    </Data>
                  );
                })}
              </tr>
            )
        )}
      </tbody>

      <AddNewMovieOfTheMonthForm
        handleUpdateTable={handleUpdateTable}
        show={addNewModalShow}
        onHide={() => setAddNewModalShow(false)}
      />
    </>
  );
}

TableBody.propTypes = {
  tableData: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleUpdateTable: PropTypes.func.isRequired,
  setDeletePrompt: PropTypes.func.isRequired,
};
export default TableBody;
