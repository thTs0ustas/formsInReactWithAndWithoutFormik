import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { BurgerButton } from "./BurgerElements";

export const Burger = ({ isOpen, onClick }) => {
  return (
    <BurgerButton onClick={onClick} isOpen={isOpen}>
      {!isOpen ? <FaBars /> : <FaTimes />}
    </BurgerButton>
  );
};
