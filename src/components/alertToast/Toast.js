import { Toast, ToastHeader } from "react-bootstrap";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { ToastContainer } from "./StyledComponents/ToastContainer";
import { clearError } from "../../rModel/reducers/errorReducer/errorReducer";

function AlertToast({ error }) {
  const dispatch = useDispatch();

  return (
    <ToastContainer
      delay={3000}
      show={!!error.message}
      onClose={() => dispatch(clearError())}
      autohide
    >
      <ToastHeader closeButton={false}>
        <strong className='me-auto'>Message</strong>
        <span className='me-auto'>{error.time}</span>
      </ToastHeader>
      <Toast.Body>{error.message}</Toast.Body>
    </ToastContainer>
  );
}

AlertToast.propTypes = {
  error: PropTypes.objectOf(
    PropTypes.shape({
      message: PropTypes.string,
      time: PropTypes.string,
    })
  ).isRequired,
};

export { AlertToast };
