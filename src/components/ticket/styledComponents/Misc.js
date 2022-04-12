import styled from "styled-components";

const Cinema = styled.p`
  color: ${({ theme }) => theme.light};
  font-size: 11px;
`;

const Title = styled.div`
  padding: 25px 17px 5px;
`;

const MovieTitle = styled.div`
  font-size: 15px;
`;

const Info = styled.div`
  padding: 7px 17px;
`;

export { Info, MovieTitle, Title, Cinema };
