import styled from "styled-components";

export const ContinueButton = styled.button`
  width: 200px;
  display: inline-block;
  padding: 10px 25px;
  margin: 0 5px 5px 0;
  background-color: ${({ theme, disabled }) => (disabled ? theme.secondary : theme.primary)};
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
