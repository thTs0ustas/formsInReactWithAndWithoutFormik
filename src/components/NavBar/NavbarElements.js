

import styled,{keyframes } from "styled-components";
import "./index";


//Animations for When the User Clicks the Burger
 export const letterAnimation = keyframes`
 0% { opacity:0;}
 100% { opacity: 1;}
 `;


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




