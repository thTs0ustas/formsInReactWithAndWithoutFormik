import { Button, Form, Modal } from "react-bootstrap";
import React from "react";
import PropTypes from "prop-types";
import { useAddNewMOTM } from "../hooks/useAddNewMOTM";

function AddNewMovieOfTheMonthForm({ onHide, show } = {}) {
  const { formik, notPlayingMovies } = useAddNewMOTM(show, onHide);

  return (
    <Modal show={show} size='lg' aria-labelledby='contained-modal-title-vcenter' centered>
      <Modal.Header>
        <Modal.Title id='contained-modal-title-vcenter'>Add new Movie</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          onSubmit={(e) => {
            formik.handleSubmit(e);
            onHide();
          }}
        >
          <Form.Group className='mb-3' controlId='formBasicTitle'>
            <Form.Label>Title</Form.Label>
            <Form.Select
              onChange={formik.handleChange}
              name='movie_id'
              value={formik.values.movie_id}
              type='text'
            >
              <option aria-label='movies not playing' />
              {notPlayingMovies?.map((movie) => (
                <option value={movie.id} key={movie.id}>
                  {movie.title}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Button variant='outline-success' type='submit'>
            Add New Movie
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            onHide();
            formik.resetForm();
          }}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
AddNewMovieOfTheMonthForm.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
};

export { AddNewMovieOfTheMonthForm };
