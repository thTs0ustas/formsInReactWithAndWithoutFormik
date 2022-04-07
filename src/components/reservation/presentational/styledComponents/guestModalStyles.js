import styled from "styled-components";
import { Modal } from "react-bootstrap";

const GuestContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
const GuestModalContainer = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  top: 10px;
  left: 60px;
  & .modal-dialog {
    @media (min-width: 576px) {
      max-width: 1000px;
    }
    & .modal-content {
      background-color: ${({ theme }) => theme.bgMain};
      height: 550px;

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
        margin: 0 auto;
      }
      @media (min-width: 576px) {
        border-radius: 0;
        max-width: 900px;
      }
    }
  }
`;

export { GuestModalContainer, GuestContainer };
