import React from "react";
import { v4 as uuid4 } from "uuid";
import PropTypes from "prop-types";
import { NavItem, NavLink, NavMenuUL } from "./NavMenuElements";
import { MenuItems } from "./MenuItems";

function NavMenu({ isOpen }) {
  return (
    <NavMenuUL isOpen={isOpen}>
      {MenuItems.map((item) => (
        <NavLink key={uuid4()}>
          <NavItem to={item.url}>
            {item.icon} {item.title}
          </NavItem>
        </NavLink>
      ))}
    </NavMenuUL>
  );
}
NavMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
export default NavMenu;
