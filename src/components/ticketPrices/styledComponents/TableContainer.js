import styled from "styled-components";

const TableContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  height: 500px;
  background-color: ${(props) => props.theme.bgMain};
  & h1 {
    color: ${(props) => props.theme.primary};
    text-align: center;
    margin-top: 50px;
    margin-bottom: 50px;
  }
  & h2 {
    color: ${(props) => props.theme.primary};
    font-size: 1.5rem;
    padding: 15px;
    text-transform: uppercase;
    margin-top: 30px;
  }
  & a {
    color: ${(props) => props.theme.secondary};
    text-decoration: none;
    font-size: 1.5rem;
    text-transform: uppercase;
    margin-top: 30px;
    &:hover {
      color: ${(props) => props.theme.secondary2};
    }
  }
`;

export { TableContainer };
