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

  padding: 10px;
  border-bottom: 1px solid ${(props) => props.theme.primary};
  font-weight: normal;

  &:first-child {
    width: 85%;
  }
  th {
    padding: 10px;
    border-bottom: 1px solid ${(props) => props.theme.primary};
    font-size: 14px;
    text-align: left;
    background-color: ${(props) => props.theme.dark};
    border-right: 1px solid ${(props) => props.theme.primary};
    border-left: 1px solid ${(props) => props.theme.primary};
    border-top: 1px solid ${(props) => props.theme.primary};
    font-weight: bold;
  }
  td {
    padding: 10px;
    background-color: ${(props) => props.theme.bgMain};
    border-bottom: 1px solid ${(props) => props.theme.primary};
    font-weight: normal;
  }
  tr:hover {
    background-color: ${(props) => props.theme.dark};
  }
`;
export { TableStyles };
