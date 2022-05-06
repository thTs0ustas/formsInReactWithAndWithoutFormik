import styled from "styled-components";
import { Modal } from "react-bootstrap";

const ModalContainer = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  & .modal-dialog {
    @media (min-width: 576px) {
      max-width: 1000px;
      margin: 1.75rem auto;
    }

    & .modal-content {
      background-color: ${({ theme }) => theme.bgMain};
      width: 100%;
      & .modal-header {
        color: ${({ theme }) => theme.secondary};
        & .modal-title {
          text-transform: uppercase;
          font-weight: bolder;
          font-size: 24px;
        }
      }
      & .modal-footer {
        color: ${({ theme }) => theme.secondary};
        & p {
          width: 100%;
          text-align: left;
          text-transform: uppercase;
          font-weight: bolder;
          font-size: 18px;
        }
      }

      & .modal-body {
        height: 400px;
        padding: 0;
      }
      @media (min-width: 576px) {
        border-radius: 0;
        max-width: 1000px;
      }
    }
  }
`;
const ModalHeader = styled(Modal.Header)`
  border-radius: 0;
  border-bottom: 5px solid ${({ theme }) => theme.border};
  padding: 0;
  margin: 0;
`;
const ModalBody = styled(Modal.Body)``;

export { ModalBody, ModalContainer, ModalHeader };
