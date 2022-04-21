import styled from "styled-components";
import { Toast } from "react-bootstrap";

const ToastHeader = styled(Toast.Header)`
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 0;
  font-weight: bolder;
`;

export { ToastHeader };
