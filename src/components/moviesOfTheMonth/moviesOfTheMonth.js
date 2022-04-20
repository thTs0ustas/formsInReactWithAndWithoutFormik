import React, { useState } from "react";
import {
  CarouselItem,
  ColStyled,
  MoviesMonthImg,
  MoviesMonthScreeningContainer,
  MoviesMonthScreeningItem,
  ShowingToday,
  TitleHeader,
} from "./styledComponents/styles";
import { useMoviesOfTheMonth } from "./hooks/useMoviesOfTheMonth";
import { useProvider } from "../../model";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
// import { ButtonIcon, CarouselButton } from "./";
import { chunk, map } from "lodash";
import { Link } from "react-router-dom";
import "./moviesOfTheMonth.css";

export const MoviesOfTheMonth = () => {
  const today = new Date().getDay();
  const movieDate = (movie_starts) => new Date(movie_starts).getDay();

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useMoviesOfTheMonth();
  const [state, dispatch] = useProvider();
  let slices = chunk(state.homepage.movies[0], 3);
  console.log(slices);

  return (
    <>
      <TitleHeader>
        <h2>FILMS SHOWING TODAY</h2>
        <Link to={`/nowshowing`}><p>See all films & session times</p></Link>
      </TitleHeader>
      <ShowingToday>
        <Carousel activeIndex={index} onSelect={handleSelect} fade>
          {map(slices, (slice, i) => {
            return (
            <CarouselItem key={i} interval={3000} style={{ display: "flex" }}>
              {map(
                slice,
                ({
                  Screenings,
                  Movie: { id, title, genre, image, Screening },
                }) => {
                  {/* if(today === movieDate(movie_starts)) */}
                  return (
                  <ColStyled key={id} md={4} sm={6} xs={12}>
                    <MoviesMonthImg src={`${state.BASE_URL}${image}`} />
                    <p>{genre.replace(/^\w/, (c) => c?.toUpperCase())}</p>
                    <h2>
                      <Link to={`/reservation/${id}`}>{title}</Link>
                    </h2>
                    <MoviesMonthScreeningContainer>
                        
                      {map(Screenings, ({ id, movie_starts }) => (
                       
                        <MoviesMonthScreeningItem key={id}>
                          {movie_starts.split("T")[1].slice(0, 5)}
                        </MoviesMonthScreeningItem>
                        
                      ))}
                    </MoviesMonthScreeningContainer>
                  </ColStyled>
                )}
              )}
            </CarouselItem>
          )})}

          {/*</Row>*/}
        </Carousel>
      </ShowingToday>
    </>
  );
};
