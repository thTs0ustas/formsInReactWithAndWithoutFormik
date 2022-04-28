import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { map } from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { genres } from "../data/genres";
import addNewMovieAction from "../../actions/addNewMovieAction";

function AddNewMovieForm({ onHide, show } = {}) {
  const { id, token } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      genre: "",
      duration: 0,
      release_year: "",
    },
    onSubmit: (values) => {
      dispatch(addNewMovieAction({ id, values, token }));
      formik.resetForm();
      onHide();
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title required"),
      description: Yup.string().required("Description required"),
      genre: Yup.string().required("Genre is required"),
      duration: Yup.number().min(1).max(400).required("Duration is required"),
      release_year: Yup.number().min(1890).max(2002).required("Must choose a release date"),
    }),
  });

  return (
    <Modal show={show} size='lg' aria-labelledby='contained-modal-title-vcenter' centered>
      <Modal.Header>
        <Modal.Title id='contained-modal-title-vcenter'>Create new movie</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          onSubmit={(event) => {
            formik.handleSubmit(event);
            onHide();
          }}
        >
          <Form.Group className='mb-3' controlId='formBasicTitle'>
            <Form.Label>Title</Form.Label>
            <Form.Control
              onChange={formik.handleChange}
              name='title'
              value={formik.values.title}
              type='text'
              className={formik.errors.title && "is-invalid"}
            />
            {formik.errors.title && <div>{formik.errors.title}</div>}
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicDescription'>
            <Form.Label>Description</Form.Label>
            <Form.Control
              name='description'
              onChange={formik.handleChange}
              as='textarea'
              rows={3}
              value={formik.values.description}
              className={formik.errors.description && "is-invalid"}
            />
            {formik.errors.description && <div>{formik.errors.description}</div>}
          </Form.Group>
          <Row className='mb-3'>
            <Form.Group as={Col} controlId='formGridDuration'>
              <Form.Label>Duration</Form.Label>
              <Form.Control
                onChange={formik.handleChange}
                name='duration'
                value={formik.values.duration}
                type='text'
                className={formik.errors.duration && "is-invalid"}
              />
              {formik.errors.duration && <div>{formik.errors.duration}</div>}
            </Form.Group>

            <Form.Group as={Col} controlId='formGridState'>
              <Form.Label>Genre</Form.Label>
              <Form.Select
                onChange={formik.handleChange}
                name='genre'
                value={formik.values.genre}
                type='text'
                className={formik.errors.genre && "is-invalid"}
              >
                <option>Choose...</option>
                {map(genres, (genre, i) => (
                  <option key={i} value={genre}>
                    {genre}
                  </option>
                ))}
              </Form.Select>
              {formik.errors.genre && <div>{formik.errors.genre}</div>}
            </Form.Group>

            <Form.Group as={Col} controlId='formGridNumber'>
              <Form.Label>Release Year</Form.Label>
              <Form.Control
                onChange={formik.handleChange}
                name='release_year'
                value={formik.values.release_year}
                type='text'
                className={formik.errors.release_year && "is-invalid"}
              />
              {formik.errors.release_year && <div>{formik.errors.release_year}</div>}
            </Form.Group>
          </Row>
          <Button variant='outline-success' type='submit' disabled={!formik.isValid}>
            Add New
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

AddNewMovieForm.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
};

export { AddNewMovieForm };
