import React, {useState} from 'react';

import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import { CarouselContainer } from './HeroSliderElements';

 const CarouselHero = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

  return (
    <CarouselContainer activeIndex={index} onSelect={handleSelect} fade> 
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={require("../../assets/imgs/the-batman.jpg")}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 fit"
          src={require("../../assets/imgs/the-batman.jpg")}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </CarouselContainer> 
  );
};

export default CarouselHero;