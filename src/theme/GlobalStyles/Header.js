import styled from "styled-components";

const Header = styled.header`
  background-color: ${({ theme }) => theme.bgMain};
  z-index: 1;
  border-bottom: ${({ theme, mainPage = true }) =>
    mainPage ? `4px solid ${theme.primary}` : "none"};
`;

export { Header };
