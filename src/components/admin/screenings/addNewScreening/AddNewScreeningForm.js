import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useEffect } from "react";
import TimePicker from "react-bootstrap-time-picker";
import { timeFromInt } from "time-number/lib";
import moment from "moment";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "lodash";
import { userAdminSelector } from "../selectors/selectors";
import { addScreeningAction } from "../actions/addScreeningAction";
import getAdminMovieOfTheMonthAction from "../../moviesOfTheMonth/actions/getAdminMovieOfTheMonthAction";

function AddNewScreeningForm({ onHide, show } = {}) {
  const { id, token, moviesOfTheMonth } = useSelector(userAdminSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    if (show && isEmpty(moviesOfTheMonth)) dispatch(getAdminMovieOfTheMonthAction({ id, token }));
  }, [show]);

  const formik = useFormik({
    initialValues: {
      movie_id: 0,
      auditorium_id: 1,
      movie_starts: "",
      movie_ends: "",
      movie_date: "",
    },
    onSubmit: (values) => {
      dispatch(addScreeningAction({ id, token, values }));
      formik.resetForm();
      onHide();
    },
    validationSchema: Yup.object({
      movie_id: Yup.number().required("Title required"),
      movie_date: Yup.date().min(moment().format()).required("Must choose a release date"),
    }),
  });

  return (
    <Modal show={show} size='lg' aria-labelledby='contained-modal-title-vcenter' centered>
      <Modal.Header>
        <Modal.Title id='contained-modal-title-vcenter'>Add new screening</Modal.Title>
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
              <option aria-label='movies of the month' />
              {moviesOfTheMonth?.map((movie) => (
                <option value={movie.id} key={movie.id}>
                  {movie.Movie?.title}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicDescription'>
            <Form.Label>Hall</Form.Label>
            <Form.Control
              disabled
              name='auditorium_id'
              onChange={formik.handleChange}
              value={`Hall ${formik.values.auditorium_id}`}
            />
          </Form.Group>
          <Row className='mb-3'>
            <Form.Group as={Col} className='mb-3' controlId='formGridDuration'>
              <Form.Label>Movie Starts</Form.Label>
              <TimePicker
                format={24}
                name='movie_starts'
                value={formik.values.movie_starts}
                onChange={(value) => {
                  formik.setFieldValue("movie_starts", timeFromInt(value));
                }}
                step={30}
              />
            </Form.Group>
            <Form.Group as={Col} className='mb-3' controlId='formGridDuration'>
              <Form.Label>Movie Ends</Form.Label>
              <TimePicker
                format={24}
                name='movie_ends'
                value={formik.values.movie_ends}
                onChange={(value) => {
                  formik.setFieldValue("movie_ends", timeFromInt(value));
                }}
                step={30}
              />
            </Form.Group>
            <Form.Group as={Col} controlId='formGridDuration'>
              <Form.Label>Movie Date</Form.Label>
              <Form.Control
                onChange={formik.handleChange}
                name='movie_date'
                value={formik.values.movie_date}
                type='date'
              />
            </Form.Group>
          </Row>
          <Button variant='outline-success' type='submit'>
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
AddNewScreeningForm.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
};
export { AddNewScreeningForm };
