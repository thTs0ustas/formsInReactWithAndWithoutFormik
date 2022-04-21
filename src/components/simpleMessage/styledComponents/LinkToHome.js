import styled from "styled-components";

const LinkToHome = styled.p`
  padding-top: 50px;
  & a {
    color: ${({ theme }) => theme.secondary};
    font-weight: bold;
    font-size: 20px;
    transition: 100ms linear;
    &:hover {
      color: ${({ theme }) => theme.secondary2};
    }
  }
`;

export { LinkToHome };
