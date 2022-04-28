import styled from "styled-components";

const NavDiv = styled.div`
  background-color: ${({ theme }) => theme.bgMain};
  height: 100px;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
`;

const Nav = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const NavItem = styled.div`
  text-align: center;
  background-color: ${({ theme }) => theme.logo};
  flex-grow: 1;
`;
export { Nav, NavItem, NavDiv };
