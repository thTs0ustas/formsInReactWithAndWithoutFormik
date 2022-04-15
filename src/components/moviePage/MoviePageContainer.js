import React, { useState, useEffect } from "react";
import axios from "axios";
import MainPhoto from "./MainPhoto";
import MainText from "./MainText";

const MoviePageContainer = ({ id }) => {
  const [movie, setMovie] = useState([]);
  const getMovie = () => {
    axios.get("http://localhost:4000/moviesOfTheMonth/1").then((res) => {
      const myMovie = res.data;
      console.log(myMovie);
      setMovie(myMovie);
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
