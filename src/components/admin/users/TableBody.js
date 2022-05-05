import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { UpdateUserForm } from "./updateUserForm/UpdateUserForm";
import { Data } from "./styledComponents/Data";
import { decideTdData } from "./helpers/conditional";
import { userAdminSelector } from "./selectors/selectors";
import { deleteAdminUserAction } from "./actions/deleteAdminUserAction";

function TableBody({ tableData, columns }) {
  const { id, token } = useSelector(userAdminSelector);
  const dispatch = useDispatch();

  const [include, setInclude] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleModal = (data) => {
    setUserData(data);
    setModalShow(true);
  };

  return (
    <>
      <tbody>
        <tr>
          <td />
          <td>
            <input onChange={(e) => setInclude(e.target.value)} />
          </td>
        </tr>
        {tableData?.map(
          (data) =>
            data.username.includes(include) && (
              <tr key={data.id}>
                {columns.map(({ accessor }) => {
                  const tData = decideTdData(data, accessor, RiDeleteBin6Line);
                  return (
                    <Data
                      onClick={() =>
                        accessor !== "delete"
                          ? handleModal(data)
                          : dispatch(deleteAdminUserAction({ id, token, deleteId: data.id }))
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
        <UpdateUserForm show={modalShow} data={userData} onHide={() => setModalShow(false)} />
      )}
    </>
  );
}
TableBody.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  tableData: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default TableBody;
