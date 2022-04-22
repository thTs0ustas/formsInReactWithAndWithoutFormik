import React, { useEffect, useState } from "react";
import axios from "axios";
import MainPhoto from "./MainPhoto";
import MainText from "./MainText";
import { useParams } from "react-router-dom";

const MoviePageContainer = () => {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const getMovie = () => {
    axios.get(`http://localhost:4000/moviesOfTheMonth/${id}`).then(({ data }) => {
      setMovie(data);
    });
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      <MainPhoto image={movie?.Movie?.image} title={movie?.Movie?.title} />
      <MainText movie={movie} id={id} />
    </div>
  );
};

export default MoviePageContainer;
