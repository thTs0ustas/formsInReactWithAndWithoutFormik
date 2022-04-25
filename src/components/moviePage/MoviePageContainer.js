import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import MainPhoto from "./MainPhoto";
import MainText from "./MainText";
import { useParams } from "react-router-dom";
import { selectors, useProvider } from "../../model";

const MoviePageContainer = () => {
  const [{ BASE_URL }] = useProvider([selectors.url]);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const getMovie = useCallback(() => {
    axios.get(`${BASE_URL}/movies/moviepage/${id}`).then(({ data }) => {
      setMovie(data);
    });
  }, [BASE_URL, id]);
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
