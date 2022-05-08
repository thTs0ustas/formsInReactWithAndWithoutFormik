import { Toast, ToastHeader } from "react-bootstrap";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { ToastContainer } from "./StyledComponents/ToastContainer";
import { clearError } from "../../features";

function AlertToast({ error }) {
  const dispatch = useDispatch();
  const { message, time } = error;
  return (
    <ToastContainer delay={3000} show={!!message} onClose={() => dispatch(clearError())} autohide>
      <ToastHeader closeButton={false}>
        <strong className='me-auto'>Message</strong>
        <span>{time}</span>
      </ToastHeader>
      <Toast.Body>{message}</Toast.Body>
    </ToastContainer>
  );
}

AlertToast.defaultProps = {
  error: {
    message: "",
    time: "",
  },
};

AlertToast.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string,
    time: PropTypes.string,
  }),
};

export { AlertToast };
