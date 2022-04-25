import styled, { keyframes } from "styled-components";

//Animations for When the User Clicks the Burger
export const letterAnimation = keyframes`
 0% { opacity:0;}
 100% { opacity: 1;}
 `;

//Nav main Container
export const Nav = styled.nav`
  background: linear-gradient(black, transparent);
  width: 100%;
  color: white;
  min-height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 32px;
  z-index: 9999;
  padding: 15px;

  @media screen and (max-width: 800px) {
    //In smaller screens add different styling to the nav container
    z-index: 9999;
    position: static;

    background: linear-gradient(${({ theme }) => theme.dark}, ${({ theme }) => theme.bgMain});
    border-bottom: 2px solid #b09661;
    //when Burger is clicked turn it to full page view
    ${({ isOpen }) =>
      isOpen &&
      `
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
		`}
  }
  //Change the content when the screen height is too small
  @media screen and (max-height: 800px) {
    ${({ isOpen }) =>
      isOpen &&
      `
		justify-content: center;
		`}
  }
`;

//Container for the LOGO and the BURGER - styled for Mobile Screens
export const MobileContainer = styled.div`
  @media screen and (max-width: 800px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 12px;

    ${({ isOpen }) =>
      isOpen &&
      `
		position: absolute;
		top: 0;
		left: 0;
		border-bottom: 1px solid rgba(255, 255, 255, 0.089);
		`}
  }
`;
