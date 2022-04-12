import { Toast, ToastHeader } from "react-bootstrap";

import { useProvider } from "../../model";
import { handleError } from "../../model/actions";
import { ToastContainer } from "./StyledComponents/ToastContainer";

const AlertToast = ({ error }) => {
  const [, dispatch] = useProvider();

  return (
    <ToastContainer
      show={!!error.message}
      onClose={() => dispatch(handleError({ message: "", time: "" }))}
      delay={10000}
      autohide
    >
      <ToastHeader closeButton={false}>
        <strong className='me-auto'>Error</strong>
      </ToastHeader>
      <Toast.Body>{error.message}</Toast.Body>
    </ToastContainer>
  );
};

export { AlertToast };
