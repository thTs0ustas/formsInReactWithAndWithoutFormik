import React, { useState } from "react";
import "./Carousel.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { isEmpty, sampleSize } from "lodash";
import { useSelector } from "react-redux";
import { ButtonIcon, CarouselButton } from "./CarouselButton";
import { BASE_URL } from "../../constants";
import image1 from "../../assets/imgs/movie-theater.jpg";

function CarouselHero() {
  const nowShowing = sampleSize(
    useSelector((state) => state.nowPlaying.nowShowing),
    4
  );

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} fade>
      {isEmpty(nowShowing) ? (
        <img src={image1} alt='First slide' />
      ) : (
        nowShowing.map((item) => {
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
}

export default CarouselHero;
