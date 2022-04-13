import styled from "styled-components";

const SeatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: ${({ disable }) => (!disable ? "none" : "all")};
`;
const SeatsGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
const SeatLegend = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding-left: 20px;
  width: 100%;
  align-items: flex-start;
  & div span {
    margin-left: 10px;
    text-decoration: underline;
    color: ${({ theme }) => theme.secondary2};
  }
`;

export { SeatLegend, SeatsContainer, SeatsGrid };
