import { useEffect, useState } from "react";
import { UpdateScreeningsForm } from "./updateScreeningsForm/UpdateScreeningsForm";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Data } from "./styledComponents/Data";
import { decideTdData } from "./helpers/conditional";
import { Button } from "react-bootstrap";
import { AddNewScreeningForm } from "./addNewScreening/AddNewScreeningForm";
import { selectors, useProvider } from "../../../model";
import axios from "axios";
import { handleError } from "../../../model/actions";

const TableBody = ({ tableData, columns, handleUpdateTable, setDeletePrompt }) => {
  const [{ userInfo, BASE_URL }, dispatch] = useProvider([selectors.userInfo, selectors.url]);

  const [include, setInclude] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [addNewModalShow, setAddNewModalShow] = useState(false);
  const [userData, setUserData] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    if (deleteId) {
      axios
        .delete(`${BASE_URL}/admin/${userInfo.username}/screening/delete/${deleteId}`, {
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
        <UpdateScreeningsForm
          handleUpdateTable={handleUpdateTable}
          show={modalShow}
          data={userData}
          onHide={() => setModalShow(false)}
        />
      )}
      <AddNewScreeningForm
        handleUpdateTable={handleUpdateTable}
        show={addNewModalShow}
        onHide={() => setAddNewModalShow(false)}
      />
    </>
  );
};

export default TableBody;
