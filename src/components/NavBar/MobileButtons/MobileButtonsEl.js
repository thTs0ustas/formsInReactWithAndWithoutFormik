import styled from "styled-components";
import {letterAnimation} from '../NavbarElements'

export const MobileDiv = styled.div`
	display: none;
  	@media screen and (max-width: 768px) {
		animation-name: ${letterAnimation};
		animation-duration: 4s; 
		 ${({ isOpen }) =>
		isOpen && `
		display: block;	
        width:	
		` 
		}
	  }
`;


//Change colors to THEME COLORS
export const Description = styled.span`
    color: #B17615;
    display: block;
    text-align: center;

`;

export const SignIn = styled.a`
	color: white;
	margin-top: 20px;
    display: block;
    text-align: center;
    margin-bottom: 10px;
    font-size: calc(15px + 0.5rem);
    
    
`;


//Change colors to THEME COLORS
export const SignUp = styled.button`

    font-size: calc(15px + 0.5rem);
    width: 100%;
	background-color: #B17615;
	border: none;
	outline: none;
	padding: 6px 6px;

    color: white;
    
    
    
`;
