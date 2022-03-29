import React, { useState } from "react";
import {FaBars, FaTimes} from "react-icons/fa";


import {Nav, BurgerButton,MobileContainer,
} from './NavbarElements';


import NavMenu from "./NavMenu";
import ButtonsDiv from "./MobileButtons/index";
import Logo from "./Logo";



const Burger= (props) => {
		return (
			<BurgerButton onClick={props.onClick}>
				<FaBars/>
			</BurgerButton>
		) 
	
}

const NavBar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
      }
    return (
			<div>
				<Nav isOpen={navbarOpen}>
					<MobileContainer isOpen={navbarOpen} >
						<Logo />
						<Burger onClick={handleToggle}/>
					</MobileContainer>
					<NavMenu isOpen={navbarOpen} />
					<ButtonsDiv isOpen={navbarOpen}/>
				</Nav>
			</div>
		);
}

export default NavBar;