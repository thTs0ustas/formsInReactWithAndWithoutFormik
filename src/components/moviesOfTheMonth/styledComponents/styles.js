import styled from "styled-components";
import { Col } from "react-bootstrap";

const TitleHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 200px;
  text-align: center;
  background-color: ${({ theme }) => theme.bgMain};

  & h2 {
    width: 90%;
    text-align: center;
    border-bottom: 1px solid ${({ theme }) => theme.secondary};
    line-height: 0.1em;
    margin: 10px auto 10px;
    color: ${({ theme }) => theme.secondary};
    & span {
      background-color: ${({ theme }) => theme.bgMain};
      padding: 0 10px;
    }
  }

  & p {
    color: ${({ theme }) => theme.primary};
    &:hover {
      color: ${({ theme }) => theme.white};
    }
  }

  & a {
    text-decoration: none;
  }
`;

const NowShowing = styled.div`
  margin: 0 auto;
  padding-bottom: 50px;
  max-width: 1450px;
  width: 100%;
  display: flex;
  justify-content: space-around;

  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.bgMain};

  & p {
    font-weight: bold;
    text-wrap: normal;
    color: ${({ theme }) => theme.secondary};
  }

  & h2 {
    text-wrap: normal;
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

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    &:hover {
      filter: brightness(1.2);
    }
  }
`;

const ShowingToday = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  margin: 0 10px;
  overflow-x: auto;
  -webkit-overflow-scrolling: auto;
  background-color: ${({ theme }) => theme.bgMain};
  & > div {
    margin-left: 10px;
    margin-right: 10px;
  }
  &::-webkit-scrollbar {
    display: compact;
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.secondary};
    border-radius: 50px;
  }

  & p {
    font-weight: bold;
    text-wrap: normal;
    color: ${({ theme }) => theme.secondary};
  }

  & h2 {
    text-wrap: normal;
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

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    &:hover {
      filter: brightness(1.2);
    }
  }
`;

const MoviesMonthImg = styled.img`
  object-fit: cover;
  image-rendering: optimizeQuality;

  width: 90%;
  border-bottom: ${({ theme, mainPage = true }) =>
    mainPage ? `4px solid ${theme.secondary}` : "none"};
`;

const MoviesMonthScreeningContainer = styled.div`
  display: flex;
  height: 25px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const MoviesMonthScreeningItem = styled.div`
  background-color: ${({ theme }) => theme.primary};

  color: #000;
  height: 25px;
  line-height: 25px;
  text-align: center;
  padding: 0 5px;
  font-weight: bold;
`;

const ColStyledNowPlaying = styled(Col)`
  display: flex;

  @media (max-width: 576px) {
    h2 {
      font-size: 1rem;
    }
    p {
      font-size: 0.6rem;
    }
  }
`;

const ColStyled = styled(Col)`
  display: inline-block;
  max-width: 1450px;

  @media (max-width: 576px) {
    h2 {
      font-size: 1rem;
    }
    p {
      font-size: 0.6rem;
    }
  }
`;

export {
  ColStyledNowPlaying,
  NowShowing,
  TitleHeader,
  ShowingToday,
  ColStyled,
  MoviesMonthImg,
  MoviesMonthScreeningContainer,
  MoviesMonthScreeningItem,
};
