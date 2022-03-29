// import { FaBars } from 'react-icons/fa';

import styled,{keyframes } from "styled-components";
import "./index";


//Animations for When the User Clicks the Burger
 export const letterAnimation = keyframes`
 0% { opacity:0;}
 100% { opacity: 1;}
 `;


export const Nav = styled.nav`
	background-color: #94002E;
	width: 100%;
	color: white;
	height: 6vh;
    display: flex;
	justify-content: space-between;
	align-items: center;
	/* Where the user has clicked the burger (is on mobile) change it to FullPageView */
	@media screen and (max-width: 768px) {
		${({ isOpen }) =>
		isOpen && `
		flex-direction: column;
		justify-content: space-around;
		height: 100vh;
		background-color: black;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 1;
		transition: all 0.6s ease-in-out;
		` 
		}
	}
	//Change the content when the scree height is too small
	@media screen and (max-height: 726px) {
		${({ isOpen }) =>
		isOpen && `
		justify-content: center;
		` 
		}
	}
`;

//Container for the LOGO and the BURGER - styled for Mobile Screens
export const MobileContainer = styled.div`
	
	@media screen and (max-width: 768px) {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		padding: 20px;
		font-size: 16px;
		${({ isOpen }) =>
		isOpen && `
		position: absolute;
		top: 10px;
		border-bottom: 1px solid rgba(255, 255, 255, 0.089);
		` 
		}
	}
	
	
	
`;

export const BurgerButton = styled.button`
	@media screen and (max-width: 768px) {
		border: none;
		display: flex;
		background-color: transparent;
		align-items: center;
		justify-content: center;
		border-radius: 2px;
		color: white;
		border: 1px solid white;
		width: 30px;
		height: 30px;
		position: relative;
		&:before {
			content: "Menu";
			position: absolute;
			left: -100%;
			top: 0;
			color: white;
			z-index: 10;
			transform: translateX(-50%);
		}
	}
	display: none;

`;



