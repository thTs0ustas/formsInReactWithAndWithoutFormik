import React, { useEffect, useState } from "react";
import "./Carousel.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { ButtonIcon, CarouselButton } from "./CarouselButton";
import { Link } from "react-router-dom";
import axios from "axios";

const CarouselHero = () => {
  //boostrap code
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  //Get Movies of the month
  const [movie, setMovie] = useState([]);
  const getMovie = () => {
    axios.get("http://localhost:4000/moviesOfTheMonth").then((res) => {
      setMovie([...res.data]);
    });
  };

  useEffect(() => {
    getMovie();
  }, []);
  return (
    <Carousel activeIndex={index} onSelect={handleSelect} fade>
      {movie.map((item) => {
        const { id, title, description, image } = item.Movie;
        console.log(`http://localhost:4000${image}`);
        return (
          <Carousel.Item key={id} interval={3000}>
            <img src={`http://localhost:4000${image}`} alt='First slide' />
            <Carousel.Caption>
              <h1>{title}</h1>
              <p>{description}</p>
              <CarouselButton>
                <ButtonIcon />
                <Link to={`/reservation/${item.id}`} state={`http://localhost:4000${image}`}>
                  Book Now
                </Link>
              </CarouselButton>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};
// onClick={getMovie}
export default CarouselHero;
