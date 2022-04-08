import styled from "styled-components";

export const TicketContainer = styled.div`
  width: calc(400px / 2);
  height: 420px;
  background-color: white;
  margin: 25px auto;
  position: relative;
  & img {
    max-width: 100%;
    height: auto;
  }
`;
