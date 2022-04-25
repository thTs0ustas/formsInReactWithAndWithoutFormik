import styled from "styled-components";

export const ContinueButton = styled.button`
  display: inline-block;
  padding: 10px 25px;
  margin: 20px 0 0 0;
  background-color: ${({ theme }) => theme.primary};
  text-transform: uppercase;
  text-align: center;
  border: 0;
  color: #000;
  font-size: 18px;

  text-decoration: none;
  font-weight: 500;
  transition: 0.3s ease-out 0s;

  &:hover {
    color: #000;
    background-color: ${({ theme }) => theme.secondary};
  }
`;
