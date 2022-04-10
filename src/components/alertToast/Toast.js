import { Toast } from "react-bootstrap";

import { useProvider } from "../../model";
import { handleError } from "../../model/actions";

const AlertToast = ({ error }) => {
  const [, dispatch] = useProvider();

  return (
    <Toast
      show={!!error.message}
      onClose={() => dispatch(handleError({ message: "", time: "" }))}
      style={{
        marginTop: 150,
        marginRight: 5,
        backgroundColor: "#b09661",
        borderRadius: 0,
        transition: "100ms linear",
      }}
      delay={10000}
      autohide
    >
      <Toast.Header
        closeButton={false}
        style={{
          backgroundColor: "#ffebc6",
          borderRadius: 0,
          fontWeight: "bolder",
        }}
      >
        <strong className='me-auto'>Error</strong>
      </Toast.Header>
      <Toast.Body>{error.message}</Toast.Body>
    </Toast>
  );
};

export { AlertToast };
