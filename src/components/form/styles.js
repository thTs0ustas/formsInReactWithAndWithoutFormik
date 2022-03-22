import styled from "styled-components";

export const ContinueButton = styled.button`
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
