import React, { useEffect, useState } from "react";
import axios from "axios";
import MainPhoto from "./MainPhoto";
import MainText from "./MainText";

const MoviePageContainer = ({ id = 1 }) => {
  const [movie, setMovie] = useState([]);
  const getMovie = () => {
    axios
      .get(`http://localhost:4000/moviesOfTheMonth/${id}`)
      .then(({ data }) => {
        setMovie(data);
      });
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      <MainPhoto image={movie.Movie?.image} title={movie.Movie?.title} />
      <MainText movie={movie} />
    </div>
  );
};

export default MoviePageContainer;
