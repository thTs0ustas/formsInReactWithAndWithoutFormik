import React from "react";
import PropTypes from "prop-types";
import { MoviePosterStyles } from "../../styledComponents";

function MoviePoster({ image }) {
  return (
    <MoviePosterStyles>
      <img src={image || require(`../../../../../assets/imgs/movie-theater.jpg`)} alt='poster' />
    </MoviePosterStyles>
  );
}

MoviePoster.propTypes = {
  image: PropTypes.string.isRequired,
};

export { MoviePoster };
