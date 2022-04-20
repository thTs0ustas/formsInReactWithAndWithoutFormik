import React from "react";
import { NavItem, NavLink, NavMenuUL } from "./NavMenuElements";
import { MenuItems } from "./MenuItems";

const NavMenu = (props) => {
  return (
    <NavMenuUL isOpen={props.isOpen}>
      {MenuItems.map((item, index) => {
        return (
          <NavLink key={index}>
            <NavItem to={item.url}>
              {item.icon} {item.title}
            </NavItem>
          </NavLink>
        );
      })}
    </NavMenuUL>
  );
};

export default NavMenu;
