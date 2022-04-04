

import styled,{keyframes } from "styled-components";
import "./index";


//Animations for When the User Clicks the Burger
 export const letterAnimation = keyframes`
 0% { opacity:0;}
 100% { opacity: 1;}
 `;

//Nav main Container
export const Nav = styled.nav`
	background: linear-gradient(black, transparent);;
	width: 100%;
	color: white;
	min-height: 100px;
    display: flex;
	justify-content: space-between;
	align-items: center;
	position: absolute;
	z-index: 9999;
	padding: 2%;

	@media screen and (max-width: 768px) {
		//In smaller screens add different styling to the nav container
		position: static;
		background: linear-gradient(#94002E, #94002E);
		border-bottom: 2px solid #B09661;
		//when Burger is clicked turn it to full pageview
		${({ isOpen }) =>
		isOpen && `
		flex-direction: column;
		justify-content: space-around;
		height: 100vh;
		background: linear-gradient(black, black);
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		transition: height 0.4s ease-in-out;
		border-bottom: none;
		` 
		}
	}
	//Change the content when the screen height is too small
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
		padding: 12px;
		
		
		${({ isOpen }) =>
		isOpen && `
		position: absolute;
		top: 0;
		left: 0;
		border-bottom: 1px solid rgba(255, 255, 255, 0.089);
		` 
		}
	}
	
	
	
`;




