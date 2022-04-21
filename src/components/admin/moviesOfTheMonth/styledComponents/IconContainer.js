import styled from "styled-components";

const IconContainer = styled.button`
  width: 100%;
  padding: 10px;
  background-color: transparent;
  border: 0;
  & svg {
    height: 20px;
    width: 20px;
  }

  &:hover svg {
    color: red;
  }
`;
export { IconContainer };
