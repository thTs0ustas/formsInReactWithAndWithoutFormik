import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Data } from "./styledComponents/Data";
import { decideTdData } from "./helpers/conditional";
import { Button } from "react-bootstrap";
import { AddNewMovieOfTheMonthForm } from "./AddNewMovieOfTheMonthForm/AddNewMovieOfTheMonthForm";

const TableBody = ({ tableData, columns, handleUpdateTable }) => {
  const [include, setInclude] = useState("");
  const [addNewModalShow, setAddNewModalShow] = useState(false);

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
          <td>
            <input onChange={(e) => setInclude(e.target.value)} />
          </td>
        </tr>
        {tableData?.map(
          (data) =>
            data.title?.includes(include) && (
              <tr key={data.id}>
                {columns.map(({ accessor }) => {
                  const tData = decideTdData(data, accessor, RiDeleteBin6Line);
                  return (
                    <Data onClick={() => accessor !== "delete" || alert("delete")} key={accessor}>
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
};

export default TableBody;
