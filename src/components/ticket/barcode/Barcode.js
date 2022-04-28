import React from "react";
import { map } from "lodash";
import PropTypes from "prop-types";
import { BlackBar, WhiteBar } from "./styledComponents/Bars";

export function Barcode({ barcode }) {
  return (
    <tr>
      {map(barcode, (data, i) => (data === "1" ? <WhiteBar key={i} /> : <BlackBar key={i} />))}
    </tr>
  );
}

Barcode.propTypes = {
  barcode: PropTypes.array.isRequired,
};
