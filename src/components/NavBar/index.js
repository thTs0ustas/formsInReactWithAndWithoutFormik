import React, { useState } from "react";
import { MobileContainer, Nav } from "./NavbarElements";

import NavMenu from "./NavMenu";
import ButtonsDiv from "./MobileButtons/index";
import Logo from "./Logo";
import { Burger } from "./Burger";

function NavBar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  return (
    <Nav isOpen={navbarOpen}>
      <MobileContainer isOpen={navbarOpen}>
        <Logo />
        <Burger onClick={handleToggle} isOpen={navbarOpen} />
      </MobileContainer>
      <NavMenu isOpen={navbarOpen} />
      <ButtonsDiv isOpen={navbarOpen} />
    </Nav>
  );
}

export default NavBar;
