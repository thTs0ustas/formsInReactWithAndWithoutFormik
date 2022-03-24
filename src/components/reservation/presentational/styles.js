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

export { ReservationInfoBar, SeatsContainer, Container, ReservationForm, SeatsGrid, TicketOptions };
