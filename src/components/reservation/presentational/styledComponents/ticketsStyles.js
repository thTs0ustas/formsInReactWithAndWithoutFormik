import styled from "styled-components";

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
    color: ${({ theme }) => theme.light};

  & p:first-child {
    text-transform: uppercase;
    font-size: 18px;
    color: ${({ theme }) => theme.primary}
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
    border-bottom: 1px solid ${({ theme }) => theme.primary}

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
  border-radius: ${({ left = false }) => (left ? "3px 0 0 3px " : "0 3px 3px 0")};
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

export {
  ButtonForMembers,
  ButtonForTickets,
  NumberOfTickets,
  TicketBar,
  TicketBarRight,
  TicketInfo,
  TicketOptions,
  TypeOfTicket,
};
