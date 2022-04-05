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
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  //Get Movies of the month
  const [movie, setMovie] = useState([]);
  const getMovie = () => {
    axios.get("http://localhost:4000/moviesOfTheMonth").then((res) => {
      const myMovie = res.data;
      myMovie.push();
      setMovie(myMovie);
    });
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <Carousel activeIndex={index} onSelect={handleSelect} fade>
      {movie.map((item) => {
        const { id, title, description, image } = item.Movie;
        return (
          <Carousel.Item key={id} interval={3000}>
            <img
              src={require(`../../assets/imgs/batman.jpg`)}
              alt='First slide'
            />
            <Carousel.Caption>
              <h1>{title}</h1>
              <p>{description}</p>
              <CarouselButton>
                <ButtonIcon />
                <Link to='/reservation'>Book Now</Link>
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
