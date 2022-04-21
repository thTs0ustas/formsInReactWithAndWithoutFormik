import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { BurgerButton } from "./BurgerElements";

export const Burger = (props) => {
  return (
    <BurgerButton onClick={props.onClick} isOpen={props.isOpen}>
      {!props.isOpen ? <FaBars /> : <FaTimes />}
    </BurgerButton>
  );
};
