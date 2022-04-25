import React from "react";
import { NavItem, NavLink, NavMenuUL } from "./NavMenuElements";
import { MenuItems } from "./MenuItems";

const NavMenu = ({ isOpen }) => {
  return (
    <NavMenuUL isOpen={isOpen}>
      {MenuItems.map((item, index) => {
        return (
          <NavLink key={index}>
            <NavItem href={item.url}>
              {item.icon} {item.title}
            </NavItem>
          </NavLink>
        );
      })}
    </NavMenuUL>
  );
};

export default NavMenu;
