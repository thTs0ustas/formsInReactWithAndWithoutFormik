import { Form, Modal } from "react-bootstrap";
import styled from "styled-components";

const ReservationForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  margin: 0 auto;
`;
const ReservationInfoBar = styled.div`
  z-index: 1;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: black;
  width: 100%;
  max-width: 1520px;
`;
const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 1440px;
`;

const TicketOptions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  max-width: 1440px;
  height: 600px;
  margin: 45px auto;
  background-color: ${({ theme }) => theme.bgMain};

  &:last-child {
    align-items: flex-end;

    @media (max-width: 768px) {
      align-items: center;
    }
  }
`;
const TicketInfo = styled.div`
  width: 100%;
  text-align: left;

  & p:first-child {
    text-transform: uppercase;
    font-size: 18px;
    color: ${({ theme }) => theme.secondary};
    border-bottom: 1px solid #b09661;

    & strong {
      color: ${({ theme }) => theme.primary};
      font-size: 20px;
    }
  }
  & p:last-child {
    text-transform: uppercase;
    font-size: 18px;
    color: ${({ theme }) => theme.secondary};
    border-bottom: 1px solid #b09661;

    & strong {
      color: ${({ theme }) => theme.primary};
      font-size: 20px;
    }
  }
`;
const TicketBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  max-width: 1440px;
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;
const TicketBarRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const TypeOfTicket = styled.span`
  display: inline-block;
  width: 70px;
  text-align: left;
  text-transform: uppercase;
  font-weight: bold;
  color: ${({ theme }) => theme.secondary2};
`;
const NumberOfTickets = styled.p`
  margin: 0;
  display: inline-block;
  width: 30px;
  text-align: center;
  color: ${({ theme }) => theme.secondary2};
`;
const ButtonForTickets = styled.button`
  border-radius: ${({ left = false }) =>
    left ? "3px 0 0 3px " : "0 3px 3px 0"};
  background-color: ${({ theme }) => theme.logo};
  width: 34px;
  height: 34px;
  border: none;
  transition: 200ms linear;

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
  }
  &:disabled {
    pointer-events: none;
  }
`;
const ButtonForMembers = styled.button`
  border: 0;
  background-color: ${({ theme }) => theme.logo};
  padding: 5px 15px;
  height: 35px;
  font-weight: bold;

  margin: 5px 10px;
  transition: 200ms linear;
  &:hover {
    background-color: ${({ theme }) => theme.primary};
  }
  &:disabled {
    pointer-events: none;
  }
  @media (max-width: 1096px) {
    font-size: 0.6rem;
  }
  @media (max-width: 768px) {
    font-size: 0.6rem;
  }
`;

const SeatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: ${({ disable }) => (!disable ? "none" : "all")};
`;
const SeatsGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const PleaseBeAMember = styled.div`
  align-items: center;
  display: flex;
  text-transform: uppercase;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.secondary};
  width: 100%;
`;
const PleaseBeAMemberHeader = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
  padding: 5px 0 0 10px;

  @media (max-width: 1096px) {
    font-size: 1rem;
  }
`;
const PleaseBeAMemberParagraph = styled.p`
  font-size: 0.8rem;
  font-weight: bold;
  margin: 0;
  padding: 0 0 10px 10px;
  @media (max-width: 1096px) {
    font-size: 0.5rem;
  }
`;

const Price = styled.p`
  width: 70px;
  text-align: left;
  text-transform: uppercase;
  font-size: 16px;
  color: ${({ theme }) => theme.secondary};
`;

const GuestContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const ModalContainer = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  & .modal-dialog {
    @media (min-width: 576px) {
      max-width: 900px;
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
        max-width: 900px;
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

export {
  GuestModalContainer,
  GuestContainer,
  TicketInfo,
  ModalContainer,
  ModalHeader,
  ModalBody,
  Price,
  TicketBarRight,
  TicketBar,
  PleaseBeAMemberParagraph,
  PleaseBeAMemberHeader,
  PleaseBeAMember,
  ButtonForMembers,
  ButtonForTickets,
  NumberOfTickets,
  TypeOfTicket,
  ReservationInfoBar,
  SeatsContainer,
  Container,
  ReservationForm,
  SeatsGrid,
  TicketOptions,
};
