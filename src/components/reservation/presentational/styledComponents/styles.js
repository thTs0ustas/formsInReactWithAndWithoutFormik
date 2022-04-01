import { Form } from "react-bootstrap";
import styled from "styled-components";

const ReservationForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  max-width: 1440px;
`;

const TicketOptions = styled.div`
  box-shadow: 2px 0 10px 1px black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 30%;
  height: 600px;
  background-color: ${({ theme }) => theme.secondary};
`;

const SeatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 70%;
  height: 600px;
  pointer-events: ${({ disable }) => (!disable ? "none" : "all")};
`;

const SeatsGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 600px;
`;

const ReservationInfoBar = styled.div`
  z-index: 1;
  box-shadow: -1px -1px 10px black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: black;
  width: 100%;
`;

const TypeOfTicket = styled.span`
  display: inline-block;
  width: 70px;
  text-align: center;
`;
const NumberOfTickets = styled.p`
  background-color: blueviolet;
  padding: 0 10px;
  display: inline-block;
  margin-left: 10px;
  text-align: center;
  border-radius: 5px;
`;

const ButtonForTickets = styled.button`
  border: 0;
  background-color: ${({ theme }) => theme.primary};
  width: 24px;
  margin: 5px 10px;
  transition: 200ms linear;
  &:hover {
    background-color: ${({ theme }) => theme.bgMain};
  }
  &:disabled {
    pointer-events: none;
  }
`;

export {
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
