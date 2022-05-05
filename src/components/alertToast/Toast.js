import { Toast, ToastHeader } from "react-bootstrap";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { ToastContainer } from "./StyledComponents/ToastContainer";
import { clearError } from "../../rModel";

function AlertToast({ error: { message = "", time = "" } }) {
  const dispatch = useDispatch();

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

AlertToast.propTypes = {
  error: PropTypes.object.isRequired,
  message: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export { AlertToast };
