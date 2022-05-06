import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";
import { BurgerButton } from "./BurgerElements";

export function Burger({ isOpen, onClick }) {
  return (
    <BurgerButton onClick={onClick} isOpen={isOpen}>
      {!isOpen ? <FaBars /> : <FaTimes />}
    </BurgerButton>
  );
}

Burger.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
