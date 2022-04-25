import React, { useEffect, useState } from "react";
import "./Carousel.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { ButtonIcon, CarouselButton } from "./CarouselButton";
import { Link } from "react-router-dom";
import axios from "axios";
import { isEmpty, sampleSize } from "lodash";
import { selectors, useProvider } from "../../model";

const CarouselHero = () => {
  const [{ BASE_URL }] = useProvider([selectors.url]);
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  //Get Movies of the month
  const [movie, setMovie] = useState([]);
  const getMovie = () => {
    axios.get(`${BASE_URL}/moviesOfTheMonth`).then((res) => {
      setMovie(sampleSize(res.data, 4));
    });
  };

  useEffect(() => {
    getMovie();
  }, []);
  return (
    <Carousel activeIndex={index} onSelect={handleSelect} fade>
      {isEmpty(movie) ? (
        <img src={require("../../assets/imgs/movie-theater.jpg")} alt='First slide' />
      ) : (
        movie.map((item) => {
          const { id, title, description, image } = item.Movie;

          return (
            <Carousel.Item key={id} interval={3000}>
              <img src={`${BASE_URL}${image}`} alt='First slide' />

              <Carousel.Caption>
                <h1>{title}</h1>
                <p>{description}</p>
                <CarouselButton>
                  <ButtonIcon />
                  <Link to={`/reservation/${item.id}`} state={`${BASE_URL}${image}`}>
                    Book Now
                  </Link>
                </CarouselButton>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })
      )}
    </Carousel>
  );
};
// onClick={getMovie}
export default CarouselHero;
