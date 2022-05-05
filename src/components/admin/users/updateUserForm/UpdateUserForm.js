import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect } from "react";
import { keys } from "lodash";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { updateUserAction } from "../actions/updateUserAction";
import { userSelector } from "../selectors/selectors";

function UpdateUserForm({ data, onHide, show } = {}) {
  const dispatch = useDispatch();
  const { id, token } = useSelector(userSelector);
  const formik = useFormik({
    initialValues: {
      username: "",
      first_name: "",
      last_name: "",
      address: "",
      email: "",
      postal: "",
      birth_date: "",
    },

    onSubmit: (values) => {
      dispatch(updateUserAction({ id, token, userId: data.id, values }));
      formik.resetForm();
      onHide();
    },
    validationSchema: Yup.object({
      username: Yup.string(),
      first_name: Yup.string(),
      last_name: Yup.string(),
      address: Yup.string(),
      email: Yup.string().email(),
      postal: Yup.number(),
      birth_date: Yup.date(),
    }),
  });

  useEffect(() => {
    if (show) keys(formik.values).forEach((item) => formik.setFieldValue(item, data[item], false));
  }, [show]);

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
            <Form.Label>Username</Form.Label>
            <Form.Control
              onChange={formik.handleChange}
              name='username'
              value={formik.values.username}
              type='text'
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicDescription'>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              name='first_name'
              onChange={formik.handleChange}
              value={formik.values.first_name}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formGridDuration'>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              onChange={formik.handleChange}
              name='last_name'
              value={formik.values.last_name}
              type='text'
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formGridDuration'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={formik.handleChange}
              name='email'
              value={formik.values.email}
              type='text'
            />
          </Form.Group>
          <Row className='mb-3'>
            <Form.Group as={Col} controlId='formGridDuration'>
              <Form.Label>Address</Form.Label>
              <Form.Control
                onChange={formik.handleChange}
                name='address'
                value={formik.values.address}
                type='text'
              />
            </Form.Group>

            <Form.Group as={Col} controlId='formGridState'>
              <Form.Label>Genre</Form.Label>
              <Form.Control
                onChange={formik.handleChange}
                name='postal'
                value={formik.values.postal}
                type='text'
              />
            </Form.Group>

            <Form.Group as={Col} controlId='formGridNumber'>
              <Form.Label>Birth Date</Form.Label>
              <Form.Control
                onChange={formik.handleChange}
                name='birth_date'
                value={formik.values.birth_date?.split("T")[0] || ""}
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
}

UpdateUserForm.propTypes = {
  onHide: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired,
};
export { UpdateUserForm };
