import React from "react";

export const Button = ({ style, type, children }) => {
  return (
    <button className={`btn btn-${style} btn-outline-dark mt-4 me-1`} type={type}>
      {children}
    </button>
  );
};
