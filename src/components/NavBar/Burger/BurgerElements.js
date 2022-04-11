import styled from "styled-components";

export const BurgerButton = styled.button`
  @media screen and (max-width: 800px) {
    display: flex;
    background-color: transparent;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    color: ${(props) => props.theme.white};
    border: 1px solid white;
    width: 30px;
    height: 30px;
    position: relative;
    &:before {
      content: "${(props) => (!props.isOpen ? "Menu" : "Close")}";
      position: absolute;
      left: -100%;
      top: 0;
      color: white;
      z-index: 10;
      transform: translateX(-50%);
    }
  }
  display: none;
`;
