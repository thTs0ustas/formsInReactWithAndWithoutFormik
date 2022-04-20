import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { keys, map } from "lodash";
import axios from "axios";
import { errorHandling } from "../../../signInForm/errors/errorHandling";
import { handleError } from "../../../../model/actions";
import { selectors, useProvider } from "../../../../model";
import { genres } from "../data/genres";
import { useEffect } from "react";

const UpdateMovieForm = ({ data, onHide, show, handleUpdateTable } = {}) => {
  const [{ userInfo }, dispatch] = useProvider([selectors.userInfo]);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      genre: "",
      duration: "",
      release_year: "",
    },
    onSubmit: (values) => {
      axios
        .put(
          `http://localhost:4000/admin/update/movie/${data.id}`,
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
      title: Yup.string(),
      description: Yup.string(),
      genre: Yup.string(),
      duration: Yup.number().min(1).max(400),
      release_year: Yup.number().min(1890).max(2002),
    }),
  });
  useEffect(() => {
    if (show) keys(formik.values).forEach((item) => formik.setFieldValue(item, data[item], false));
  }, [data, show]);

  return (
    <Modal show={show} size='lg' aria-labelledby='contained-modal-title-vcenter' centered>
      <Modal.Header>
        <Modal.Title id='contained-modal-title-vcenter'>Update movie info</Modal.Title>
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
              value={formik.values.title || ""}
              type='text'
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicDescription'>
            <Form.Label>Description</Form.Label>
            <Form.Control
              name='description'
              onChange={formik.handleChange}
              as='textarea'
              rows={3}
              value={formik.values.description || ""}
            />
          </Form.Group>
          <Row className='mb-3'>
            <Form.Group as={Col} controlId='formGridDuration'>
              <Form.Label>Duration</Form.Label>
              <Form.Control
                onChange={formik.handleChange}
                name='duration'
                value={formik.values.duration || ""}
                type='text'
              />
            </Form.Group>

            <Form.Group as={Col} controlId='formGridState'>
              <Form.Label>Genre</Form.Label>
              <Form.Select
                onChange={formik.handleChange}
                name='genre'
                value={formik.values.genre ? formik.values.genre : ""}
                type='text'
              >
                <option>Choose...</option>
                {map(genres, (genre, i) => (
                  <option key={i} value={genre}>
                    {genre}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId='formGridNumber'>
              <Form.Label>Release Year</Form.Label>
              <Form.Control
                onChange={formik.handleChange}
                name='release_year'
                value={formik.values.release_year || ""}
                type='text'
              />
            </Form.Group>
          </Row>
          <Button variant='outline-success' type='submit'>
            Update
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

export { UpdateMovieForm };
