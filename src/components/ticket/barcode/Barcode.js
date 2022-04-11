import React, { useMemo } from "react";
import { map, random } from "lodash";
import { BlackBar, WhiteBar } from "./styledComponents/Bars";

export const Barcode = () => {
  const code = useMemo(
    () =>
      Array(152)
        .fill("")
        .map(() => random(1, false)),
    []
  );

  return (
    <tr>
      {map(code, (data, i) =>
        data === 1 ? <WhiteBar key={i} /> : <BlackBar key={i} />
      )}
    </tr>
  );
};
