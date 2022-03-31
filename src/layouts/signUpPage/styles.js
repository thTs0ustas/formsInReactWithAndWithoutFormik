import styled from "styled-components";

const SignUpMain = styled.main`
  margin: 75px 0;
  flex-grow: 1;
`;

const Wrapper = styled.div`
  background-color: black;
  height: 50px;
  width: 100%;
  max-width: 100%;
  vertical-align: top;
  & > div {
    max-width: 1400px;
  }
`;
const SignUp = styled.div`
  margin: 0 auto;
  text-align: left;
  padding: 0 1vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 450px;
`;

export { Wrapper, SignUpMain, SignUp };
