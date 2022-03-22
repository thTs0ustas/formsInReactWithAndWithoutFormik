import styled from "styled-components";

const SignInDiv = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #94002e;
`;

const SignUpBar = styled.div`
  background-color: black;
  & div {
    display: flex;
    justify-content: flex-end;
    max-width: 1440px;
  }
`;
const SignUpButton = styled.button`
  height: 30px;
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
  height: 30px;
  width: 100px;
  background-color: ${({ theme }) => theme.primary};
  border: 0;
  transition: 0.1s linear;

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
  }
`;

export { SignUpButton, SignUpBar, SignInButton, SignInDiv };
