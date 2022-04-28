import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./promoCard.css";
import PropTypes from "prop-types";
import CardContent from "./CardContent";

export function CardComponent({ genre }) {
  return (
    <div>
      <CardContent genre={genre} />
    </div>
  );
}

CardComponent.propTypes = {
  genre: PropTypes.string.isRequired,
};
