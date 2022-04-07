import styled from "styled-components";

const CheckBoxWrapper = styled.div`
  position: relative;
  z-index: 100;
  background: transparent;
`;
const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 24px;
  border-radius: 15px;
  background: ${({ theme }) => theme.primary};
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    z-index: 10;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  border-radius: 15px;
  width: 50px;
  height: 24px;
  &:checked + ${CheckBoxLabel} {
    background: ${({ theme }) => theme.primary};
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 28px;
      transition: 0.2s;
    }
  }
`;

export { CheckBoxLabel, CheckBox, CheckBoxWrapper };
