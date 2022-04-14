import React from "react";
import { MoviePosterStyles } from "../../styledComponents";

const MoviePoster = ({ movie }) => (
  <MoviePosterStyles>
    <img
      src={require(`../../../../../assets/imgs/${
        movie ? movie.toLowerCase().replace(" ", "") : "movie-theater"
      }.jpg`)}
      alt='poster'
    />
  </MoviePosterStyles>
);

export { MoviePoster };
