import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./promoCard.css";
import CardContent from "./CardContent";

export const CardComponent = () => {
  const [movieByGenre, setMovieByGenre] = useState([]);
  const getMovieByGenre = () => {
    axios.get(`http://localhost:4000/movies/genre/drama`).then((res) => {
      console.log(res);
      setMovieByGenre(res.data);
    });
  };
  console.log(movieByGenre);
  useEffect(() => {
    getMovieByGenre();
  }, []);

  return (
    <div>
      <CardContent movieByGenre={movieByGenre} />
    </div>
  );
};
