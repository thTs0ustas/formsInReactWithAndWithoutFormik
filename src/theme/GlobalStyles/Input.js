import styled from "styled-components";
import { Field } from "formik";

export const Input = styled(Field)`
  max-width: 418px;
  background-color: ${({ theme }) => theme.bgMain};
  color: ${({ theme }) => theme.white};
  border: 0;
  width: 100%;
  height: 45px;
  border-radius: 1px;
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px ${({ theme }) => theme.bgMain} inset !important;
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
`;
