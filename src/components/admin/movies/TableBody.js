import { useState } from "react";
import { Accordion } from "react-bootstrap";
import { UpdateMovieForm } from "./updateMovieForm/UpdateMovieForm";

const TableBody = ({ tableData, columns, handleUpdateTable }) => {
  const [include, setInclude] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [movieData, setMovieData] = useState(null);

  const handleModal = (data) => {
    setMovieData(data);
    setModalShow(true);
  };

  const checkTitle = (title) => title.toLowerCase().includes(include.toLowerCase());
  return (
    <>
      <tbody>
        <tr>
          <td />
          <td>
            <input onChange={(e) => setInclude(e.target.value)} />
          </td>
          <td />
          <td />
          <td />
          <td />
        </tr>
        {tableData.map((data) =>
          checkTitle(data.title) ? (
            <tr key={data.id}>
              {columns.map(({ accessor }) => {
                const tData = data[accessor] ? data[accessor] : "——";
                return accessor !== "description" ? (
                  <td onClick={() => handleModal(data)} key={accessor}>
                    {tData}
                  </td>
                ) : (
                  <td key={accessor} style={{ display: "flex", padding: 0 }}>
                    <Accordion defaultActiveKey='0'>
                      <Accordion.Header style={{ width: 500 }}>
                        {data[accessor].substring(0, 50)}...
                      </Accordion.Header>
                      <Accordion.Body>{data[accessor]}</Accordion.Body>
                    </Accordion>
                  </td>
                );
              })}
            </tr>
          ) : null
        )}
      </tbody>
      {movieData && (
        <UpdateMovieForm
          handleUpdateTable={handleUpdateTable}
          show={modalShow}
          data={movieData}
          onHide={() => setModalShow(false)}
        />
      )}
    </>
  );
};

export default TableBody;
