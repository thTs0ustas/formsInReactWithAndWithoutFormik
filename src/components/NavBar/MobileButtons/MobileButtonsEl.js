import styled from "styled-components";
import { letterAnimation } from "../NavbarElements";

export const MobileDiv = styled.div`
  display: none;
  @media screen and (max-width: 800px) {
    animation-name: ${letterAnimation};
    animation-duration: 4s;
    ${({ isOpen }) =>
      isOpen &&
      `
		display: block;	
        
		`}
  }
`;

// Change colors to THEME COLORS
export const Description = styled.span`
  color: #b17615;
  display: block;
  text-align: center;
`;

export const SignIn = styled.button`
  font-size: calc(15px + 0.5rem);
  width: 100%;
  background-color: transparent;
  border: 2px solid #b17615;
  outline: none;
  padding: 6px 6px;
  margin: 20px 0;
  color: #b17615;
`;

// Change colors to THEME COLORS
export const SignUp = styled.button`
  font-size: calc(15px + 0.5rem);
  width: 100%;
  background-color: #b17615;
  border: none;
  outline: none;
  padding: 6px 6px;
  color: white;
  margin-bottom: 20px;
`;

export const SocialDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 20px;
  font-size: 22px;
`;
