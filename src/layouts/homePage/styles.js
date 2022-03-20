import styled from "styled-components";

const SignUpBar = styled.div`
  background-color: black;
  display: flex;
  padding: 0 40px;
  justify-content: flex-end;
  align-items: center;
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

const HomeDiv = styled.div`
  background-color: blueviolet;
`;

const NavDiv = styled.div`
  top: 0;
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

const VideoWallDiv = styled.div`
  position: relative;
  min-height: 400px;
  max-height: 1000px;
  height: 40vw;
  background-color: #a5f1d2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const VideoWallInfo = styled.div`
  position: relative;
  background-color: crimson;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & p {
    font-size: calc(16px + 6 * ((100vw - 320px) / 680));
    margin: 0;
  }
  & h2 {
    margin: 10px 0 20px 0;
    font-size: calc(26px + 6 * ((100vw - 320px) / 680));
  }

  & a {
    padding: 5px;
    border: 0;
    border-top: 1px solid black;
  }
`;

const Features = styled.div`
  background-color: cadetblue;
  margin: 0 auto;
  max-width: 1400px;
  overflow: hidden;
`;

const ComingUp = styled.div`
  background-color: fuchsia;
  padding: 10px 0;
`;

const Archive = styled.div`
  background-color: greenyellow;
  padding: 10px 0;
`;
const Typography = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 150px;
  text-align: center;
`;

const Card = styled.div`
  background-color: chocolate;
  margin: 0 auto;
  height: 25vw;
  min-height: 120px;
  max-height: 250px;

  width: 30vw;
  min-width: 250px;
  max-width: 400px;
  border: 1px solid #000;

  @media (max-width: 576px) {
    width: 93vw;
    height: 88vw;
  }
`;

const Promos = styled.div`
  background-color: royalblue;
  padding: 10px 0;
`;

const PromoCard = styled.div`
  background-color: green;
  margin: 10px auto 10px auto;

  height: 35vw;
  min-height: 120px;
  max-height: 500px;
  border: 1px solid #000;
  width: 42vw;
  min-width: 250px;
  max-width: 650px;

  @media (max-width: 576px) {
    width: 90vw;
    height: 85vw;
  }
`;

const Footer = styled.div`
  background-color: black;
  height: 300px;
`;

export {
  HomeDiv,
  SignUpBar,
  SignUpButton,
  NavDiv,
  Nav,
  NavItem,
  VideoWallDiv,
  SignInButton,
  VideoWallInfo,
  Features,
  Footer,
  ComingUp,
  Archive,
  Typography,
  Card,
  Promos,
  PromoCard,
};
