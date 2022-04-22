import styled from "styled-components";

const SignInDiv = styled.div`
  background-color: ${({ theme }) => theme.bgMain};
`;

const SignUpBar = styled.div`
  z-index: 2;
  display: flex;
  justify-content: space-between;
  background-color: black;
  align-items: center;
  padding-left: 15px;
  & div:first-child {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    margin-left: 1vw;
  }
  & div:last-child {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    //max-width: 1440px;
    padding: 0 1vw;
  }
`;
const SignUpButton = styled.button`
  height: 32px;
  width: 100px;
  background-color: black;

  color: ${({ theme }) => theme.white};
  border: 0;
  transition: 0.1s linear;
  margin-right: 5px;

  &:hover {
    color: #9d9d9d;
  }
`;
const SignInButton = styled.button`
  height: 32px;
  width: 100px;
  background-color: ${({ theme }) => theme.primary};
  border: 0;
  transition: 0.1s linear;

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
  }
`;

export { SignUpButton, SignUpBar, SignInButton, SignInDiv };
