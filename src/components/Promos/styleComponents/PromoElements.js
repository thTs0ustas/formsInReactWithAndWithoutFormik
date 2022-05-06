import styled from "styled-components";
import { SignIn } from "../../NavBar/MobileButtons/MobileButtonsEl";

export const Container = styled.div`
  //style for mobile first
  background-color: black;
  margin: 20px;
  color: ${(props) => props.theme.white};
  min-width: 350px;
  min-height: 500px;
  font-size: calc(15px + 0.3vw);
  position: relative;
  overflow: hidden;
  .image-container {
    height: 250px;
    width: 100%;
    object-fit: cover;
    object-position: top;
    filter: grayscale(100%);
    border-bottom: 1px solid ${(props) => props.theme.secondary};
  }

  .bottom-div {
    padding: 10px;
    min-height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  //style for larger screens
  @media (min-width: 1054px) {
    &:hover .bottom-div {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &:hover .bottom-div {
      transition: all 1s ease-out;
      background-color: rgba(0, 0, 0, 0.4);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 500px;
      padding: 20px;
    }
    &:hover .image-container {
      height: 500px;
      transform: scale(1.1);
      transition: transform 0.6s ease-in-out;
    }
    .hide-btn {
      display: none;
    }
    &:hover .bottom-div .hide-btn {
      display: block;
    }
    &:hover .bottom-div .hide-content {
      display: none;
    }
  }
`;

// Elements inside Bottom Div
export const Title = styled.h1`
  position: relative;
  margin-bottom: 20px;
  &::before {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -10px;
    transform: translateX(-50%);
    width: 35px;
    height: 2px;
    background-color: ${(props) => props.theme.primary};
  }
`;

export const PromoPara = styled.p`
  color: ${(props) => props.theme.secondary};
  //some reason justify content doesn't work on medium screens
  text-align: center;
  max-width: 400px;
`;
export const PromoButton = styled(SignIn)`
  background-color: black;
  margin: 0;
  width: 50%;
  @media (min-width: 892px) {
    width: 200px;
  }
`;
