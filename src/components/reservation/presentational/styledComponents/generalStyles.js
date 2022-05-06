import styled from "styled-components";
import { Form } from "react-bootstrap";

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
  background-color: #000;
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
const Price = styled.p`
  width: 70px;
  text-align: left;
  text-transform: uppercase;
  font-size: 16px;
  color: ${({ theme }) => theme.secondary};
`;

export { ReservationForm, Price, Container, ReservationInfoBar };
