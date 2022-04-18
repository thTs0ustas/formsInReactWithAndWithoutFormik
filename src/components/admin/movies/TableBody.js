import { useState } from "react";
import { Accordion, Button } from "react-bootstrap";
import { UpdateMovieForm } from "./updateMovieForm/UpdateMovieForm";
import { AddNewMovieForm } from "./addNewMovieForm/AddNewMovieForm";

const TableBody = ({ tableData, columns, handleUpdateTable }) => {
  const [include, setInclude] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [addNewModalShow, setAddNewModalShow] = useState(false);
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
          <td colSpan={4} />
        </tr>
        {tableData?.map((data) =>
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
      <AddNewMovieForm
        handleUpdateTable={handleUpdateTable}
        show={addNewModalShow}
        onHide={() => setAddNewModalShow(false)}
      />
    </>
  );
};

export default TableBody;
