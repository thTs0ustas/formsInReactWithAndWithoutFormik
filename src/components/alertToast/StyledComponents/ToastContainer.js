import styled from "styled-components";
import { Toast } from "react-bootstrap";

const ToastContainer = styled(Toast)`
  z-index: auto;
  margin-top: 150px;
  margin-right: 5px;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 0;
  transition: 100ms linear;
`;

export { ToastContainer };
