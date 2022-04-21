import styled from "styled-components";

const TicketContainer = styled.div`
  margin: 50px auto;
  width: 80%;
  max-width: 1500px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  display: flex;
  flex-wrap: wrap;
  & > div:first-child {
    display: flex;
    justify-content: space-between;
    width: 300px;
  }
  & h3 {
    padding-left: 4%;
    color: ${({ theme }) => theme.primary};
    font-weight: bolder;
  }
  & h4 {
    color: ${({ theme }) => theme.secondary};
    width: 100%;
    font-weight: bold;
    padding-left: 4%;
    margin-bottom: 50px;
  }
`;

export { TicketContainer };
