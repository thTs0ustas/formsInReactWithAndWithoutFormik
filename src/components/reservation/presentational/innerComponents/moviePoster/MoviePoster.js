import React from "react";
import { MoviePosterStyles } from "../../styledComponents";

const MoviePoster = ({ image }) => (
  <MoviePosterStyles>
    <img
      src={image ? image : require(`../../../../../assets/imgs/movie-theater.jpg`)}
      alt='poster'
    />
  </MoviePosterStyles>
);

export { MoviePoster };
