import { Button, Form, Modal } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../../../../constants";
import getNotShowingMoviesAction from "../actions/getNotShowingMoviesAction";

function AddNewMovieOfTheMonthForm({ onHide, show } = {}) {
  const { id, token } = useSelector((state) => state.user);
  const { notPlayingMovies } = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  useEffect(() => {
    if (show) dispatch(getNotShowingMoviesAction({ id, token }));
  }, [show]);

  const formik = useFormik({
    initialValues: {
      movie_id: 0,
    },
    onSubmit: (values) => {
      axios
        .post(
          `${BASE_URL}/admin/${id}/movieOfTheMonth/create`,
          {
            values,
          },
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        )
        .then(() => {
          onHide();
        });
    },
    validationSchema: Yup.object({
      movie_id: Yup.number().required("Title required"),
    }),
  });

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
