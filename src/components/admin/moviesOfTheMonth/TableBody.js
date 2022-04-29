import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { Data } from "./styledComponents/Data";
import { decideTdData } from "./helpers/conditional";
import { AddNewMovieOfTheMonthForm } from "./AddNewMovieOfTheMonthForm/AddNewMovieOfTheMonthForm";

function TableBody({ tableData, columns }) {
  const [include, setInclude] = useState("");
  const [addNewModalShow, setAddNewModalShow] = useState(false);

  return (
    <>
      <tbody>
        <tr>
          <td colSpan={4}>
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
        </tr>
        {tableData?.map(
          ({ Movie: data }, i) =>
            data.title?.toLowerCase().includes(include.toLowerCase()) && (
              <tr key={data.id}>
                {columns.map(({ accessor }) => {
                  const tData = decideTdData(data, accessor, RiDeleteBin6Line, i);
                  return (
                    <Data
                      key={accessor}
                      // onClick={() => accessor !== "delete" || setDeleteId(data.id)}
                    >
                      {tData}
                    </Data>
                  );
                })}
              </tr>
            )
        )}
      </tbody>

      <AddNewMovieOfTheMonthForm show={addNewModalShow} onHide={() => setAddNewModalShow(false)} />
    </>
  );
}

TableBody.propTypes = {
  tableData: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default TableBody;
