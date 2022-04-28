import styled from "styled-components";

const PleaseBeAMember = styled.div`
  align-items: center;
  display: flex;
  text-transform: uppercase;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.secondary};
  width: 100%;
`;
const PleaseBeAMemberHeader = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
  padding: 5px 0 0 10px;

  @media (max-width: 1096px) {
    font-size: 1rem;
  }
`;

const PleaseBeAMemberParagraph = styled.p`
  font-size: 0.8rem;
  font-weight: bold;
  margin: 0;
  padding: 0 0 10px 10px;
  @media (max-width: 1096px) {
    font-size: 0.5rem;
  }
`;

export { PleaseBeAMember, PleaseBeAMemberHeader, PleaseBeAMemberParagraph };
