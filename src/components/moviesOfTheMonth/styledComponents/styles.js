import styled from "styled-components";
import { Carousel, Col } from "react-bootstrap";

const TitleHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 150px;
  text-align: center;
  background-color: ${({ theme }) => theme.bgMain};

  & h2 {
    color: ${({ theme }) => theme.secondary};

  }
    ${'' /* & h2:before {
      right: 100%;
      margin-right: 10px;
      content: '';
      display: inline-block;
      flex-direction: column;
      top: 50%;
      width: 10000px;
      height: 1px;
      background-color: ${({ theme }) => theme.secondary};
    }
    & h2:after {
      content: '';
      display: inline-block;
      flex-direction: column;
      top: 50%;
      width: 10000px;
      height: 1px;
      background-color: ${({ theme }) => theme.secondary};
    } */}

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
  padding: 10px 0;

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
    filter: brightness(1.2);
  }
`;

const MoviesMonthImg = styled.img`
  object-fit: cover;
  image-rendering: optimizeQuality;
  margin: 0 auto;
  height: 15vw;
  min-height: 120px;
  max-height: 250px;
  margin-left: 25px;
  width: 30vw;
  min-width: 250px;
  max-width: 400px;
  border-bottom: ${({ theme, mainPage = true }) =>
    mainPage ? `4px solid ${theme.secondary}` : "none"};

  @media (max-width: 576px) {
    width: 93vw;
    height: 88vw;
  }
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
  display: flex;
  flex-direction: column;
  & h2 {
  }
  & p {
  }
`;


const CarouselItem = styled(Carousel.Item)`
background-color: ${({ theme }) => theme.bgMain};
& img {
  opacity: 1;
}
`;



export {
  CarouselItem,
  TitleHeader,
  ShowingToday,
  ColStyled,
  MoviesMonthImg,
  MoviesMonthScreeningContainer,
  MoviesMonthScreeningItem,
};
