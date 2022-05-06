import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { UpdateScreeningsForm } from "./updateScreeningsForm/UpdateScreeningsForm";
import { Data } from "./styledComponents/Data";
import { decideTdData } from "./helpers/conditional";
import { AddNewScreeningForm } from "./addNewScreening/AddNewScreeningForm";
import { userSelector } from "./selectors/selectors";
import { deleteAdminScreeningAction } from "./actions/deleteAdminScreeningAction";

function TableBody({ tableData, columns }) {
  const { id, token } = useSelector(userSelector);
  const dispatch = useDispatch();

  const [include, setInclude] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [addNewModalShow, setAddNewModalShow] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleModal = (data) => {
    setUserData(data);
    setModalShow(true);
  };

  return (
    <>
      <tbody>
        <tr>
          <td colSpan={6}>
            <Button onClick={() => setAddNewModalShow(true)} variant='primary'>
              Add New Screening
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
                    <Data
                      onClick={async () =>
                        accessor !== "delete"
                          ? handleModal(data)
                          : dispatch(deleteAdminScreeningAction({ id, token, deleteId: data.id }))
                      }
                      key={accessor}
                    >
                      {tData}
                    </Data>
                  );
                })}
              </tr>
            )
        )}
      </tbody>
      {userData && (
        <UpdateScreeningsForm show={modalShow} data={userData} onHide={() => setModalShow(false)} />
      )}
      <AddNewScreeningForm show={addNewModalShow} onHide={() => setAddNewModalShow(false)} />
    </>
  );
}

TableBody.defaultProps = {
  tableData: [],
  columns: [],
};

TableBody.propTypes = {
  tableData: PropTypes.arrayOf(PropTypes.object),
  columns: PropTypes.arrayOf(PropTypes.object),
};
export default TableBody;
