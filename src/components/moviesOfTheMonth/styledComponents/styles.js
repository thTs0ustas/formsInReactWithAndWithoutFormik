import styled from "styled-components";
import { Col } from "react-bootstrap";

const TitleHeader = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 150px;
  text-align: center;
  background-color: ${({ theme }) => theme.bgMain};

  & h2 {
    color: ${({ theme }) => theme.secondary};
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

const ShowingToday = styled.div`
  background-color: ${({ theme }) => theme.bgMain};
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-left: 5%;
  & p {
    font-weight: bold;
    color: ${({ theme }) => theme.secondary};
  }

  & h2 {
    font-weight: bolder;
    text-transform: uppercase;
    color: ${({ theme }) => theme.white};
  }

  & a {
    text-decoration: none;
    cursor: pointer;
    color: ${({ theme }) => theme.white};
  }
  & .carousel-control-prev-icon,
  & .carousel-control-next-icon,
  & .carousel-control-prev,
  & .carousel-control-next {
    display: none;
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
    filter: brightness(1.2);
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
  margin-left: 25px;
  gap: 5px;
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

const ColStyled = styled(Col)`
  max-width: 1450px;
  display: flex;
  flex-direction: column;
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
  TitleHeader,
  ShowingToday,
  ColStyled,
  MoviesMonthImg,
  MoviesMonthScreeningContainer,
  MoviesMonthScreeningItem,
};
