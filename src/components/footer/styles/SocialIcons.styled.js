import styled from "styled-components";

export const StyledSocialIcons = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  li {
    list-style: none;
  }
  a {
    color: #b09661;
    margin-right: 10px;
    text-decoration: none;

    &:hover {
      color: white;
    }
  }

  @media (max-width: 768px) {
  }
`;
