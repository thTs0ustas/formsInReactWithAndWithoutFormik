import { Field } from "formik";
import styled from "styled-components";

const Container = styled.div`
  max-width: 700px;
  width: 100%;
  background-color: ${(props) => props.theme.bgMain};
  padding: 25px 25px;
  border-radius: 5px;
  //box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);

  & > h1 {
    color: ${(props) => props.theme.secondary};
    font-weight: 500;
    padding-bottom: 30px;
    text-transform: uppercase;
    position: relative;
  }

  & > h3 {
    color: ${(props) => props.theme.secondary};
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
    margin-bottom: 20px;
    & span {
      color: ${(props) => props.theme.secondary};
    }
  }
`;

const InputBox = styled(Field)`
  display: block;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  background-clip: padding-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  outline: 0;
  max-width: 418px;
  width: 300px;
  background-color: ${({ theme }) => theme.dark};
  border: none;
  color: ${({ theme }) => theme.white};
  margin-bottom: 15px;
  height: 45px;
  border-radius: 1px;

  @media (prefers-reduced-motion: reduce) {
    & {
      transition: none;
    }
  }

  &[type="file"] {
    overflow: hidden;
  }

  &[type="file"]:not(:disabled):not([readonly]) {
    cursor: pointer;
  }

  &:focus {
    color: #e7e7e7;
    background-color: ${({ theme }) => theme.dark};
    border-color: ${({ theme }) => theme.secondary};
    outline: 0;
    box-shadow: 0 0 0 0.1rem ${({ theme }) => theme.secondary2};
  }

  &::-webkit-date-and-time-value {
    height: 1.5em;
  }

  &::-moz-placeholder {
    color: #6c757d;
    opacity: 1;
  }

  &::placeholder {
    color: #6c757d;
    opacity: 1;
  }

  &:disabled,
  &[readonly] {
    background-color: #e9ecef;
    opacity: 1;
  }

  &::-webkit-file-upload-button {
    padding: 0.375rem 0.75rem;
    margin: -0.375rem -0.75rem;
    -webkit-margin-end: 0.75rem;
    margin-inline-end: 0.75rem;
    color: #212529;
    background-color: #e9ecef;
    pointer-events: none;
    border-color: inherit;
    border-style: solid;
    border-width: 0;
    border-inline-end-width: 1px;
    border-radius: 0;
    -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  &::file-selector-button {
    padding: 0.375rem 0.75rem;
    margin: -0.375rem -0.75rem;
    -webkit-margin-end: 0.75rem;
    margin-inline-end: 0.75rem;
    color: #212529;
    background-color: #e9ecef;
    pointer-events: none;
    border-color: inherit;
    border-style: solid;
    border-width: 0;
    border-inline-end-width: 1px;
    border-radius: 0;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  @media (prefers-reduced-motion: reduce) {
    &::-webkit-file-upload-button {
      -webkit-transition: none;
      transition: none;
    }

    &::file-selector-button {
      transition: none;
    }
  }

  &:hover:not(:disabled):not([readonly])::-webkit-file-upload-button {
    background-color: #dde0e3;
  }

  &:hover:not(:disabled):not([readonly])::file-selector-button {
    background-color: #dde0e3;
  }

  &::-webkit-file-upload-button {
    padding: 0.375rem 0.75rem;
    margin: -0.375rem -0.75rem;
    -webkit-margin-end: 0.75rem;
    margin-inline-end: 0.75rem;
    color: #212529;
    background-color: #e9ecef;
    pointer-events: none;
    border-color: inherit;
    border-style: solid;
    border-width: 0;
    border-inline-end-width: 1px;
    border-radius: 0;
    -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  @media (prefers-reduced-motion: reduce) {
    &::-webkit-file-upload-button {
      -webkit-transition: none;
      transition: none;
    }
  }

  &:hover:not(:disabled):not([readonly])::-webkit-file-upload-button {
    background-color: #dde0e3;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-text-fill-color: ${({ theme }) => theme.white};
    -webkit-box-shadow: 0 0 0 1000px ${({ theme }) => theme.dark} inset;
    box-shadow: 0 0 0 1000px ${({ theme }) => theme.dark} inset;

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
`;

const Button = styled.button`
  height: 45px;
  margin: 20px 0;
  padding: 5px 10px;
  border: none;
  color: #000;
  background-color: ${({ theme }) => theme.primary};
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: all 50ms linear;
  box-shadow: 0 0.2px 5px black;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
  }

  &:active {
    transform: translate(0.5px, 0.5px);
    box-shadow: 0.2px 0.2px 3px black;
  }
`;
const ContinueButton = styled.button`
  display: inline-block;
  padding: 10px 25px;
  margin: 20px 0 0 0;
  background-color: ${({ theme }) => theme.primary};
  text-transform: uppercase;
  text-align: center;
  border: 0;
  color: black;
  font-size: 18px;

  text-decoration: none;
  font-weight: 500;
  transition: 0.3s ease-out 0s;

  &:hover {
    color: black;
    background-color: ${({ theme }) => theme.secondary};
  }
`;
export const FormOuterDiv = styled.div`
  width: 100%;

  & h1 {
    font-size: 40px;
    color: ${({ theme }) => theme.secondary};
  }
  & p {
    margin-top: 20px;
    font-size: 18px;
    color: ${({ theme }) => theme.white};
  }
  @media (max-width: 768px) {
    & h1 {
      font-size: 20px;
      color: #ffebc6;
    }
    & p {
      margin-top: 20px;
      font-size: 12px;
      color: ${({ theme }) => theme.white};
    }
  }
`;

export { Container, UserDetails, InputBox, Button, ContinueButton };
