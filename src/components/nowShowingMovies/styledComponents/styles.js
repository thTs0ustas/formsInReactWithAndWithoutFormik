import styled from "styled-components";

const NowShowingContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1450px;
  justify-content: center;
  line-height: 2;
  padding-left: 5%;
`;

const NowShowingStacker = styled.div`
  min-width: 250px;
`;

const NowShowingStack = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 30vw;
  width: 20vw;
  margin: 0 0 25px 0;
  @media (max-width: 1000px) {
    width: 40vw;
  }
  @media (max-width: 700px) {
    width: 95vw;
  }
  & h2 {
    width: 90%;
    text-align: left;
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0 0 10px 0;
  }
  & p {
    text-align: left;
    font-size: 1rem;
    margin: 0 0 10px 0;
  }
  @media (max-width: 576px) {
    h2 {
      font-size: 1rem;
    }
    p {
      font-size: 0.6rem;
    }
  }
`;

export { NowShowingStacker, NowShowingStack, NowShowingContainer };
