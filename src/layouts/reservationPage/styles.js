import styled from "styled-components";

const ReservationContainer = styled.main`
  background-color: ${({ theme }) => theme.bgMain};

  width: 100%;
`;

const MoviePoster = styled.div`
  position: relative;
  min-height: 250px;
  max-height: 360px;
  height: 40vw;
  background-color: #a5f1d2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  & img {
    image-rendering: optimizeQuality;
    object-fit: cover;
  }
`;

export { ReservationContainer, MoviePoster };
