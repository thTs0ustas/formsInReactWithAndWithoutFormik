import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  font-size: 9px;
  margin-bottom: 7px;

  & tr {
    margin-bottom: 5px;
  }

  & th {
    text-align: left;

    &:nth-of-type(1) {
      width: 38%;
    }

    &:nth-of-type(2) {
      width: 40%;
    }

    &:nth-of-type(3) {
      width: 15%;
    }
  }

  & td {
    width: 33%;
    font-size: 16px;
  }
`;
