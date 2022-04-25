import styled from "styled-components";

export const HolesTop = styled.div`
  height: 30px;
  width: 30px;
  background-color: ${({ theme }) => theme.bgMain};
  border-radius: 50%;
  position: absolute;
  left: 50%;
  margin-left: -15px;
  top: -15px;

  &:before,
  &:after {
    content: "";
    height: 30px;
    width: 30px;
    background-color: ${({ theme }) => theme.bgMain};
    position: absolute;
    border-radius: 50%;
  }

  &:before {
    left: -100px;
  }

  &:after {
    left: 100px;
  }
`;
export const HolesLower = styled.div`
  position: relative;
  margin: 25px;
  border: 1px dashed ${({ theme }) => theme.light};

  &:before,
  &:after {
    content: "";
    height: 30px;
    width: 30px;
    background-color: ${({ theme }) => theme.bgMain};
    position: absolute;
    border-radius: 50%;
  }

  &:before {
    top: -15px;
    left: -40px;
  }

  &:after {
    top: -15px;
    left: 160px;
  }
`;
