import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import MainPhoto from "./MainPhoto";
import MainText from "./MainText";
import { useParams } from "react-router-dom";

const MoviePageContainer = () => {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const getMovie = useCallback(() => {
    axios.get(`http://localhost:4000/movies/moviepage/${id}`).then(({ data }) => {
      setMovie(data);
    });
  }, [id]);
  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return (
    <div>
      <MainPhoto image={movie?.movie?.image} title={movie?.movie?.title} />
      <MainText movie={movie} id={id} />
    </div>
  );
};

export default MoviePageContainer;
