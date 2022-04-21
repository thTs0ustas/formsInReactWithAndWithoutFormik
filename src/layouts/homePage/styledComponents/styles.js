import styled from "styled-components";
import { NavDropdown } from "react-bootstrap";

const HomeDiv = styled.div`
  background-color: ${({ theme }) => theme.bgMain};
`;

const VideoWallDiv = styled.div`
  min-height: 400px;
  background-color: ${({ theme }) => theme.bgMain};
`;

const NavDropdownDiv = styled(NavDropdown)`
  padding: 0 5px;
  height: 32px;
  & > a {
    padding: 5px 5px;
    display: inline-block;
    text-align: center;
    min-width: 120px;
    background-color: ${({ theme }) => theme.primary};
    transition: background-color 0.3s ease-in-out;
    color: #000;

    &:hover,
    &:active,
    &:focus {
      background-color: ${({ theme }) => theme.secondary2};
      color: #000;
    }
  }
  & div {
    &:not([class*="show"]) {
      display: none;
    }
    &[class*="show"] {
      width: fit-content;
      z-index: 10000;

      background-color: ${({ theme }) => theme.secondary};
      border-radius: 0;

      & a {
        text-decoration: none;
        color: #000;
      }
    }
  }
`;

const VideoWallInfo = styled.div`
  top: 40%;
  position: absolute;
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
  background-color: ${({ theme }) => theme.bgMain};
  margin: 0 auto;
  max-width: 1400px;
  overflow: hidden;
`;

const ComingUp = styled.div`
  background-color: ${({ theme }) => theme.bgMain};
  padding: 10px 0;
  overflow: auto;

  & p {
    margin-left: 25px;
    font-weigth: 200;
    color: ${({ theme }) => theme.secondary};
  }

  & h2 {
    margin-left: 25px;
    font-weight: bolder;
    text-transform: uppercase;
    color: ${({ theme }) => theme.white};
  }

  & a {
    text-decoration: none;
    cursor: pointer;
    color: ${({ theme }) => theme.white};
  }

  & a:hover {
    color: ${({ theme }) => theme.primary};
    -webkit-transition: color 0.3s ease-out 0s;
    -moz-transition: color 0.3s ease-out 0s;
    -ms-transition: color 0.3s ease-out 0s;
    -o-transition: color 0.3s ease-out 0s;
    transition: color 0.3s ease-out 0s;
  }

  & img:hover {
    opacity: 1;
  }
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
  min-height: 300px;
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

export {
  HomeDiv,
  NavDropdownDiv,
  VideoWallDiv,
  VideoWallInfo,
  Features,
  ComingUp,
  Archive,
  Typography,
  Card,
  Promos,
  PromoCard,
};
