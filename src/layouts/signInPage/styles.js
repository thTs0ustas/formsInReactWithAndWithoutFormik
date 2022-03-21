import styled from "styled-components";

const HomeDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: blueviolet;
`;
const Header = styled.header`
  height: 130px;
`;
const SignUpBar = styled.div`
  background-color: black;
`;
const SignUpButton = styled.button`
  height: 30px;
  width: 100px;
  background-color: black;
  color: aliceblue;
  border: 0;
  transition: 0.1s linear;
  margin-right: 5px;

  &:hover {
    color: #9d9d9d;
  }
`;

const SignInButton = styled.button`
  height: 30px;
  width: 100px;
  background-color: #b09661;
  border: 0;
  transition: 0.1s linear;
  margin-right: 5px;

  &:hover {
    background-color: #ffebc6;
  }
`;

const NavDiv = styled.div`
  top: 30px;
  position: absolute;
  height: 100px;
  width: 100%;
  background-color: rgba(0, 111, 255, 0.16);
`;

const Nav = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const NavItem = styled.div`
  text-align: center;
  background-color: coral;
  flex-grow: 1;
`;
const Footer = styled.div`
  background-color: black;
  height: 300px;
`;
export { Header, SignUpBar, SignInButton, SignUpButton, Nav, NavItem, NavDiv, HomeDiv, Footer };
