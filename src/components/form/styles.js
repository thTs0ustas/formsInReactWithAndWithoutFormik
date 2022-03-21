import styled from "styled-components";
import { Field } from "formik";

export const Input = styled(Field)`
  max-width: 418px;
  background-color: rgb(72, 0, 22);
  color: #fcfcfc;
  border: 0;
  width: 100%;
  height: 45px;
  border-radius: 1px;

  &:first-child {
    margin-bottom: 10px;
  }

  ::-webkit-input-placeholder {
    color: #fcfcfc;
  }

  ::-moz-placeholder {
    color: #fffafc;
  }

  &:focus {
    background-color: rgb(72, 0, 22);
    color: #fcfcfc;
    border: 2px solid #b09661;

    ::-moz-placeholder {
      color: rgba(0, 0, 0, 0);
    }
    ::-webkit-input-placeholder {
      color: rgba(0, 0, 0, 0);
    }
  }
`;

export const Button = styled.button`
  display: inline-block;
  padding: 10px 25px;
  margin: 20px 0 0 0;
  background-color: #b09661;
  text-transform: uppercase;
  text-align: center;
  border: 0;
  color: black;
  font-size: 18px;
  cursor: pointer;
  text-decoration: none;
  font-weight: 500;
  transition: 0.3s ease-out 0s;

  &:hover {
    color: black;
    background-color: #c2ad83;
  }
`;

export const FormOuterDiv = styled.div`
  width: 100%;
  & h1 {
    font-size: 40px;
    color: #ffebc6;
  }
  & p {
    margin-top: 20px;
    font-size: 20px;
    color: #ffffff;
  }
`;
