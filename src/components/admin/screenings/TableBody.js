import { useState } from "react";
import { UpdateScreeningsForm } from "./updateScreeningsForm/UpdateScreeningsForm";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Data } from "./styledComponents/Data";
import { decideTdData } from "./helpers/conditional";

const TableBody = ({ tableData, columns, handleUpdateTable }) => {
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
            data.title.includes(include) && (
              <tr key={data.id}>
                {columns.map(({ accessor }) => {
                  const tData = decideTdData(data, accessor, RiDeleteBin6Line);
                  return (
                    <Data
                      onClick={() => (accessor !== "delete" ? handleModal(data) : alert("delete"))}
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
    </>
  );
};

export default TableBody;
