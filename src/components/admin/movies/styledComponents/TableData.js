import styled from "styled-components";
import defaultArrow from "../../../../assets/default.png";
import upArrow from "../../../../assets/up_arrow.png";
import downArrow from "../../../../assets/down_arrow.png";

const TableHeader = styled.th`
  cursor: ${({ sortable }) => sortable && "pointer"};
  background-repeat: no-repeat;
  background-position: center right;

  background-image: ${({ sort, sortable }) =>
    sortable
      ? sort === "up"
        ? `url(${upArrow})`
        : sort === "down"
        ? `url(${downArrow})`
        : `url('${defaultArrow}')`
      : ""};

  &:first-child {
    width: 50px !important;
  }
  &:nth-child(3) {
    width: 40% !important;
  }
  &:nth-child(4) {
    width: 10% !important;
  }
  &:nth-child(5) {
    width: 10% !important;
  }
  &:nth-child(6) {
    width: 15% !important;
  }
`;

export { TableHeader };
