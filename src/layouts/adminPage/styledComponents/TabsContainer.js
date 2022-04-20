import styled from "styled-components";

const TabsContainer = styled.div`
  margin-top: 50px;
  padding: 0 10px;

  & ul li button {
    font-weight: bold;
    color: ${({ theme }) => theme.primary};
    &.nav-link.active {
      color: ${({ theme }) => theme.secondary};
      background-color: ${({ theme }) => theme.dark};
      border-radius: 0;
    }
    &:hover {
      background-color: ${({ theme }) => theme.dark};
      border-radius: 0;
      color: ${({ theme }) => theme.secondary};
    }
  }
`;
export { TabsContainer };
