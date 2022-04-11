import React from "react";
import { map } from "lodash";
import { BlackBar, WhiteBar } from "./styledComponents/Bars";

export const Barcode = ({ barcode }) => {
  return (
    <tr>{map(barcode, (data, i) => (data === 1 ? <WhiteBar key={i} /> : <BlackBar key={i} />))}</tr>
  );
};
