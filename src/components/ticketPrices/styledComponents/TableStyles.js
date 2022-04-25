import styled from "styled-components";

const TableStyles = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  border: 1px solid ${(props) => props.theme.primary};
  margin-bottom: 20px;
  font-size: 14px;
  font-family: "Open Sans", sans-serif;
  color: ${(props) => props.theme.secondary};
  text-align: left;
  th {
    background-color: ${(props) => props.theme.dark};
    padding: 10px;
    border-bottom: 1px solid ${(props) => props.theme.primary};
    font-weight: normal;
    &:first-child {
      width: 85%;
    }
  }
  td {
    padding: 10px;
    border-bottom: 1px solid ${(props) => props.theme.primary};
    font-weight: normal;
  }

  tr:hover {
    background-color: ${(props) => props.theme.dark};
  }
`;
export { TableStyles };
