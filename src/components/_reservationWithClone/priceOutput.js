import React from "react";

export const PriceOutput = ({ price }) => {
  return (
    <div className="border-bottom">
      <span className="w-25 d-inline-block form-label mt-4">Price:</span>
      <p className="border-0 d-inline-block mx-auto h-25 w-25">{`${price} €`}</p>
    </div>
  );
};
