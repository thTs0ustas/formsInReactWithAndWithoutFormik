import React, { useMemo } from "react";
import styled from "styled-components";
import { map, random } from "lodash";

const BlackBar = styled.td`
  height: 50px;
  width: 10px;
  background-color: black;
`;
const WhiteBar = styled.td`
  height: 50px;
  width: 10px;
  background-color: white;
`;
const BarcodeTr = styled.tr``;

export const Barcode = () => {
  const code = useMemo(
    () =>
      Array(152)
        .fill("")
        .map(() => random(1, false)),
    []
  );

  return (
    <BarcodeTr>
      {map(code, (data, i) =>
        data === 1 ? <WhiteBar key={i} /> : <BlackBar key={i} />
      )}
    </BarcodeTr>
  );
};
