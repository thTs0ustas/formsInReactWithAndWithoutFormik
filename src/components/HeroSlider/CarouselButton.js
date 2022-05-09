import styled from "styled-components";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export const CarouselButton = styled.button`
  min-width: 80px;
  font-weight: 500;
  outline: none;

  border: 2px solid black;
  padding: 0 10px;
  background-color: rgba(0, 0, 0, 0.22);
  color: white;
  box-shadow: 1px 1px 10px rgba(255, 255, 255, 0.363);
  &:hover {
    color: #b09661;
    border: 2px solid #b09661;
  }
  & a {
    text-decoration: none;
    display: inline-block;
    color: aliceblue;
    padding: 10px 0;
  }
`;

export const ButtonIcon = styled(MdOutlineKeyboardArrowRight)``;
