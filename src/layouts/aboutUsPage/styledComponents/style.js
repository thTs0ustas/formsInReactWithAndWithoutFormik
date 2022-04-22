import styled from "styled-components";

const MainDiv = styled.div`
  background-color: ${({ theme }) => theme.bgMain};
`;

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1,
  h3 {
    color: white;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin: 35px 0;
  }
  p {
    color: white;
    letter-spacing: 1px;
    font-size: 20px;
    line-height: 1.6;
    margin-top: 20px;
  }
  img {
    width: 100%;
    margin-top: 20px;
  }
`;

const StorySection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin: 35px auto;
`;

export { MainDiv, MainSection, StorySection };
