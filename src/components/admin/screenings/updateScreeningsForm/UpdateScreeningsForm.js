import { useEffect } from "react";
import axios from "axios";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { useFormik } from "formik";
import { keys } from "lodash";
import TimePicker from "react-bootstrap-time-picker";

import { selectors, useProvider } from "../../../../model";
import { errorHandling } from "../../../signInForm/errors/errorHandling";
import { handleError } from "../../../../model/actions";
import { timeFromInt } from "time-number/lib";

const UpdateScreeningsForm = ({ data, onHide, show, handleUpdateTable } = {}) => {
  const [{ userInfo, BASE_URL }, dispatch] = useProvider([selectors.userInfo, selectors.url]);

  const formik = useFormik({
    initialValues: {
      title: "",
      auditorium_id: 1,
      movie_starts: "",
      movie_ends: "",
      movie_date: "",
    },
    onSubmit: (values) => {
      axios
        .put(
          `${BASE_URL}/admin/update/screening/${data.id}`,
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
        .then(() => formik.resetForm())
        .then(onHide)
        .catch((error) =>
          dispatch(
            handleError({
              message: error.message,
              time: new Date().getTime(),
            })
          )
        );
    },
    validator: () => ({}),
    // validationSchema: Yup.object({
    //   title: Yup.string(),
    //   movie_starts: Yup.number(),
    //   movie_ends: Yup.number(),
    //   movie_date: Yup.date(),
    // }),
  });

  useEffect(() => {
    if (show) keys(formik.values).forEach((item) => formik.setFieldValue(item, data[item], false));
  }, [data, formik, show]);

  return (
    <Modal show={show} size='lg' aria-labelledby='contained-modal-title-vcenter' centered>
      <Modal.Header>
        <Modal.Title id='contained-modal-title-vcenter'>Update screening info</Modal.Title>
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
            <Form.Control
              disabled
              onChange={formik.handleChange}
              name='title'
              value={formik.values.title}
              type='text'
            />
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

export { UpdateScreeningsForm };
