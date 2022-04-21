import { useEffect, useState } from "react";
import { UpdateUserForm } from "./updateUserForm/UpdateUserForm";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Data } from "./styledComponents/Data";
import { decideTdData } from "./helpers/conditional";
import { selectors, useProvider } from "../../../model";
import axios from "axios";
import { handleError } from "../../../model/actions";

const TableBody = ({ tableData, columns, handleUpdateTable, setDeletePrompt }) => {
  const [{ userInfo, BASE_URL }, dispatch] = useProvider([selectors.userInfo, selectors.url]);

  const [include, setInclude] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [userData, setUserData] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    if (deleteId) {
      axios
        .delete(`${BASE_URL}/admin/${userInfo.username}/user/delete/${deleteId}`, {
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
                        accessor !== "delete" ? handleModal(data) : setDeleteId(data.id)
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
        <UpdateUserForm
          handleUpdateTable={handleUpdateTable}
          show={modalShow}
          data={userData}
          onHide={() => setModalShow(false)}
        />
      )}
    </>
  );
};

export default TableBody;
