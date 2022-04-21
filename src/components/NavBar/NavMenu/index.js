import React from "react";
import { NavItem, NavLink, NavMenuUL } from "./NavMenuElements";
import { MenuItems } from "./MenuItems";
import { useNavigate } from "react-router-dom";

const NavMenu = (props) => {
  const navigate = useNavigate();
  return (
    <NavMenuUL isOpen={props.isOpen}>
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
