import styled from "styled-components";

const SignInDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #94002e;
`;
const Header = styled.header`
  z-index: 1;
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
  height: 100px;
  width: 100%;
  background-color: rgba(0, 111, 255, 0.16);
  border-bottom: 4px solid #b09661;
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

const Wrapper = styled.div`
  background-color: black;
  height: 50px;
  width: 100%;
  max-width: 100%;
  vertical-align: top;
`;

export {
  Header,
  Wrapper,
  SignUpBar,
  SignInButton,
  SignUpButton,
  Nav,
  NavItem,
  NavDiv,
  SignInDiv,
  Footer,
};
