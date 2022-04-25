import styled from "styled-components";
import { letterAnimation } from "../NavbarElements";

export const NavMenuUL = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  font-size: 16px;
  display: flex;
  align-items: center;
  //Displays the NavMenuLinks in mobile: margin must be set equal to the height of Nav, now {100px}
  /* @media screen and (max-width: 930px) {
    & li a {
      font-size: 14px;
    }
  } */
 
  @media screen and (max-width: 800px) {
    display: none;
    animation-name: ${letterAnimation};
    animation-duration: 2s;
    ${({ isOpen }) =>
      isOpen &&
      `
		display: flex;
		flex-direction: column;
		align-item: center;
		justify-content: center;
		width: 100%;
		margin-top: 100px;
		flex-grow: 1;
		`}
  }
`;

export const NavLink = styled.li`
  /* display: inline; */
  padding: 0 20px;
  @media screen and (max-width: 800px) {
    z-index: 9999;
    margin-bottom: 2%;
    text-align: center;
  }
`;

//Change color to THEME COLOR
export const NavItem = styled.a`
  font-size: calc(16px + 0.2vw);
  text-decoration: none;
  color: white;
  padding: 0 10px;
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: white;
  }
  &:after {
    content: "";
    background-color: #b17615;
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -10px;
    left: 0;
    transition: 0.4s;
  }
  &:hover:after {
    width: 100%;
  }

  @media screen and (max-width: 800px) {
    font-size: calc(16px + 0.3rem);
  }
`;
