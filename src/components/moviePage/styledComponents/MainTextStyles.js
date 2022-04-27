import styled from "styled-components";

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-bottom: 40px;
  width: 50%;

  @media screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;

const MainTitle = styled.h2`
  margin-top: 70px;
  margin-bottom: 20px;
  color: #ffebc6;
  font-size: 25px;
  text-transform: uppercase;

  @media screen and (max-width: 768px) {
    font-size: 23px;
    text-align: center;
  }

  @media screen and (max-width: 480px) {
    font-size: 21px;
  }

  @media screen and (max-width: 360px) {
    font-size: 20px;
  }
`;

const SectionTitle = styled.h3`
  margin-top: 5px;
  margin-bottom: 10px;
  color: #ffebc6;
  font-size: 20px;
  text-transform: uppercase;

  @media screen and (max-width: 768px) {
    font-size: 19px;
    text-align: center;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }

  @media screen and (max-width: 360px) {
    font-size: 17px;
  }
`;

const Paragraph = styled.p`
  align-items: flex-start;
  padding-bottom: 10px;
  color: #fff;
  font-size: 18px;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    font-size: 17px;
    text-align: justify;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }

  @media screen and (max-width: 360px) {
    font-size: 15px;
  }
`;

const DaysDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const DaysButton = styled.a`
  cursor: pointer;
  margin-top: 10px;
  margin-right: 10px;
  margin-bottom: 20px;
  padding: 6px 12px;
  border: 2px solid #b09661;
  color: #ffebc6;
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    background-color: #b09661;
    color: #000;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 10px;
    padding: 4px 8px;
    font-size: 14px;
    text-align: center;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    font-size: 13px;
  }

  @media screen and (max-width: 360px) {
    font-size: 13px;
  }
`;

const SessionDiv = styled.div`
  display: flex;
`;

const SessionButton = styled.a`
  width: 65px;
  cursor: pointer;
  margin-top: 10px;
  margin-right: 10px;
  margin-bottom: 20px;
  padding: 5px 10px;
  border: 2px solid transparent;
  background-color: #b09661;
  color: #000;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    background-color: #c1ad83;
    color: #000;
  }

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }

  @media screen and (max-width: 360px) {
    font-size: 13px;
  }
`;

export {
  TextContainer,
  MainTitle,
  SectionTitle,
  Paragraph,
  DaysDiv,
  DaysButton,
  SessionDiv,
  SessionButton,
};
