import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  background-color: #000;
  padding: 0 !important;
  & img {
    width: 100%;
    height: 45vw;
    object-fit: cover;
  }
`;
const Content = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const MoviePhoto = styled.img`
  width: 100%;
  opacity: 0.7;
`;

const MovieTitle = styled.h1`
  width: 80%;
  color: #fff;
  font-size: 34px;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;

  @media screen and (max-width: 991px) {
    font-size: 40px;
  }

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }

  @media screen and (max-width: 480px) {
    font-size: 25px;
  }

  @media screen and (max-width: 360px) {
    font-size: 24px;
  }
`;

const TrailerButton = styled.a`
  margin-top: 20px;
  padding: 5px 10px;
  border: 2px solid #ed8456;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    background-color: #ed8456;
    color: #fff;
  }

  @media screen and (max-width: 991px) {
    padding: 4px 8px;
    font-size: 16px;
  }

  @media screen and (max-width: 768px) {
    padding: 3px 6px;
    font-size: 15px;
  }

  @media screen and (max-width: 480px) {
    padding: 2px 5px;
    font-size: 14px;
  }

  @media screen and (max-width: 360px) {
    padding: 2px 4px;
    font-size: 13px;
  }
`;

export { Container, Content, MoviePhoto, MovieTitle, TrailerButton };
