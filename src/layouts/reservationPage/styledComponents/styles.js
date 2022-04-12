import styled from "styled-components";

const ReservationContainer = styled.main`
  background-color: ${({ theme }) => theme.bgMain};
  width: 100%;
`;

const MoviePoster = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1520px;
  min-height: 250px;
  max-height: 550px;
  height: 40vw;
  background-color: ${({ theme }) => theme.bgMain};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  & img {
    object-position: bottom;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export { ReservationContainer, MoviePoster };
