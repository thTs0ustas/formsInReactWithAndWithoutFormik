import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./promoCard.css";
import CardContent from "./CardContent";

export const CardComponent = ({ genre }) => {
  return (
    <div>
      <CardContent genre={genre} />
    </div>
  );
};
