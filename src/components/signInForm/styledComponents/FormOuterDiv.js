import styled from "styled-components";

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
