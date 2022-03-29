import styled from "styled-components";

export const ButtonForTickets = styled.button`
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
