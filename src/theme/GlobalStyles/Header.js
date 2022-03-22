import styled from "styled-components";

const Header = styled.header`
  z-index: 1;
  border-bottom: 4px solid ${({ theme }) => theme.primary};
`;

export { Header };
