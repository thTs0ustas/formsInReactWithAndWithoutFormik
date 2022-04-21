import styled from "styled-components";

const Screen = styled.div`
  border-radius: 50% / 100% 100% 0 0;
  text-align: center;
  background: #32557f;
  width: 700px;
  height: 30px;
  margin-bottom: 25px;
`;

const Container = styled.div`
  padding: 10px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

const IconDiv = styled.button`
  border: 0;
  //border-radius: 10px;
  padding: 2px 5px;

  background-color: ${({ theme }) => theme.bgMain};
  transition: 0.05s linear;
  &:active {
    transform: ${({ disabled }) => !disabled && "scale(1.2)"};
  }
`;

const SeatDiv = styled.div`
  text-align: center;
  width: 100%;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%; !important;
`;

const SeatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 750px;
`;

export { SeatsContainer, Col, Container, IconDiv, SeatDiv, Screen };
