import styled from "styled-components";

const SignInDiv = styled.div`
  background-color: #94002e;
`;

const SignUpBar = styled.div`
  display: flex;
  justify-content: center;
  background-color: black;
  & div {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    //max-width: 1440px;
    padding: 0 1vw;
  }
`;
const SignUpButton = styled.button`
  height: 32px;
  width: 100px;
  background-color: black;

  color: aliceblue;
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
