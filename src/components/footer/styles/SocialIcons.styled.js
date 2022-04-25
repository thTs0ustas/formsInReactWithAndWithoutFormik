import styled from "styled-components";

export const StyledSocialIcons = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  li {
    list-style: none;
  }
  a {
    color: ${({ theme }) => theme.primary};
    margin-right: 10px;
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.white};
    }
  }

  @media (max-width: 630px) {
    justify-content: center;
  }
`;
