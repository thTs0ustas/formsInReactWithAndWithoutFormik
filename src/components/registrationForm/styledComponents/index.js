import { Field } from "formik";
import styled from "styled-components";

const Container = styled.div`
  max-width: 700px;
  width: 100%;
  background-color: #94002e;
  padding: 25px 25px;
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);

  & > h1 {
    color: #f7dabb;
    font-weight: 500;
    padding-bottom: 30px;
    text-transform: uppercase;
    position: relative;
  }

  & > h3 {
    color: #f7dabb;
    font-weight: 400;
    text-transform: uppercase;
    position: relative;
  }

  @media (max-width: 700px) {
    max-width: 100%;
  }
`;

const UserDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px 0 10px 0;
  & div {
    display: flex;
    flex-direction: column;
    & span {
      color: #f7dabb;
    }
  }
`;

const InputBox = styled(Field)`
  max-width: 418px;
  width: 300px;
  background-color: #340505;
  color: ${({ theme }) => theme.white};
  border: 0;
  margin-bottom: 15px;
  height: 45px;
  border-radius: 1px;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    box-shadow: 0 0 0 30px ${({ theme }) => theme.bgMain} inset !important;
    -webkit-text-fill-color: #fcfcfc !important;
    caret-color: aliceblue;
  }

  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.white};
  }

  ::-moz-placeholder {
    color: ${({ theme }) => theme.white};
  }

  &:first-child {
    margin-bottom: 10px;
  }

  &:focus {
    background-color: ${({ theme }) => theme.bgMain};
    color: ${({ theme }) => theme.white};
    border: 2px solid ${({ theme }) => theme.primary};

    ::-moz-placeholder {
      color: rgba(0, 0, 0, 0);
    }

    ::-webkit-input-placeholder {
      color: rgba(0, 0, 0, 0);
    }
  }
  /* margin-bottom: 20px;
  width: calc(100% / 2 - 15px);
  height: 45px; */
  /* width: 100%; */
  /* outline: none;
  font-size: 1rem;
  border: none;
  padding-left: 15px;
  background: #480016;
  color: #fff;
  transition: all 0.3s;

  &:focus,
  &:valid {
    color: #fff;
    outline: 0;
    border: 1px solid #f7dabb;
  } */

  /* & span {
    color: #f7dabb;
    display: block;
    font-size: 0.9rem;
    font-weight: 400;
    margin-bottom: 5px;
    text-transform: uppercase;
  }

  & input {
  } */

  /* @media (max-width: 700px) {
    margin-bottom: 15px;
    width: 100%;
  } */
`;

const Button = styled.button`
  height: 45px;
  margin: 20px 0;
  padding: 5px 10px;
  border: none;
  color: #000;
  background-color: #b09661;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: all 50ms linear;
  box-shadow: 0 0.2px 5px black;

  &:hover {
    background-color: #c1ad83;
  }

  &:active {
    transform: translate(0.5px, 0.5px);
    box-shadow: 0.2px 0.2px 3px black;
  }
`;

export { Container, UserDetails, InputBox, Button };
