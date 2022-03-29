import styled from "styled-components";
import { letterAnimation } from "../NavbarElements";


export const NavMenuUL = styled.ul`
	margin: 0;
	padding: 0;
	list-style-type: none;
	font-size: 16px;
	@media screen and (max-width: 768px) {
		display: none;
		animation-name: ${letterAnimation};
		animation-duration: 3s;
		${({ isOpen }) =>
		isOpen && `
		display: flex;
		flex-direction: column;
		align-item: center;
		width: 100%;
		margin-top: 30px;
		` 
		}
	}
	
`;

export const NavLink = styled.li`
	display: inline;
	padding: 0 20px;
	@media screen and (max-width: 768px) {
		z-index:10;
		margin-bottom: 20px;
		text-align: center;
	}
`;

//Change color to THEME COLOR
export const NavItem = styled.a`
	
	text-decoration: none;
	color: white;
	padding: 0 10px;
	position: relative;
	cursor: pointer;

	&:hover {color: white;}
	&:after {
		content: '';
		background-color: #B17615;
		position: absolute;
		width: 0;
		height: 2px;
		bottom: -10px;
		left: 0px;
		transition: 0.4s;
	}
	&:hover:after {width: 100%;}

	@media screen and (max-width: 768px) {
		font-size: calc(15px + 0.rem);
	}
`;