import { Button, Form, Modal } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { adminMoviesNotPlayingAction, handleError } from "../../../../model/actions";
import { selectors, useProvider } from "../../../../model";
import React, { useEffect } from "react";
import { errorHandling } from "../../../signInForm/errors/errorHandling";

const AddNewMovieOfTheMonthForm = ({ onHide, show, handleUpdateTable } = {}) => {
  const [{ userInfo, admin, BASE_URL }, dispatch] = useProvider([
    selectors.userInfo,
    selectors.admin,
    selectors.url,
  ]);
  useEffect(() => {
    axios
      .get(`${BASE_URL}/admin/${userInfo.username}/getMoviesNotPlaying`, {
        headers: {
          authorization: `Bearer ${userInfo.token}`,
        },
      })
      .then(({ data }) => {
        dispatch(adminMoviesNotPlayingAction(data));
      })
      .catch((error) =>
        dispatch(handleError({ message: error.message, time: new Date().getTime() }))
      );
  }, []);

  const formik = useFormik({
    initialValues: {
      movie_id: 0,
    },
    onSubmit: (values) => {
      console.log(values);
      axios
        .post(
          `${BASE_URL}/admin/${userInfo.username}/movieOfTheMonth/create`,
          {
            username: userInfo.username,
            values,
          },
          {
            headers: {
              authorization: `Bearer ${userInfo.token}`,
            },
          }
        )
        .then((res) => {
          if (errorHandling(res.data)) {
            dispatch(
              handleError({
                message: res.data.message,
                time: new Date().getTime(),
              })
            );
          }
        })
        .then(handleUpdateTable)
        .then(onHide)
        .then(() => formik.resetForm())
        .catch((error) =>
          dispatch(
            handleError({
              message: error.message,
              time: new Date().getTime(),
            })
          )
        );
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
              <option></option>
              {admin.moviesNotPlaying?.map((movie) => (
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
};

export { AddNewMovieOfTheMonthForm };
