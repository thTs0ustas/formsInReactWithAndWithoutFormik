import { Toast, ToastHeader } from "react-bootstrap";
import { ToastContainer } from "./StyledComponents/ToastContainer";
import { useDispatch } from "react-redux";
import { clearError } from "../../rModel/reducers/errorReducer/errorReducer";

const AlertToast = ({ error }) => {
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
};

export { AlertToast };
