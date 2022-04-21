import styled from "styled-components";

const NowShowingContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1450px;
  justify-content: center;
  line-height: 2;
`;

const NowShowingStacker = styled.div`
  min-width: 250px;
`;

const NowShowingStack = styled.div`
  display: flex;
  flex-direction: column;

  min-width: 20vw;
  width: 30vw;
  max-width: 400px;
  margin: 0 auto;

  @media (max-width: 1000px) {
    width: 40vw;
  }
  @media (max-width: 700px) {
    width: 100vw;
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
  & img {
    width: 100%;
    height: auto;
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

const NowShowingStackHome = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 380px;
  width: 30vw;
  max-width: 420px;
  margin: 0 auto 25px auto;

  @media (max-width: 1000px) {
    width: 40vw;
  }
  @media (max-width: 700px) {
    width: 95vw;
  }
  & h2 {
    width: 90%;
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0 0 10px 0;
  }
  & p {
    text-align: left !important;
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

export { NowShowingStacker, NowShowingStack, NowShowingContainer, NowShowingStackHome };
