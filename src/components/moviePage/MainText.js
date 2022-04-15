import React from "react";
import { map } from "lodash";

import {
  TextContainer,
  MainTitle,
  SectionTitle,
  Paragraph,
  DaysDiv,
  DaysButton,
  SessionDiv,
  SessionButton,
} from "./styledComponents/MainTextStyles";

const MainText = ({ movie }) => {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let movieDates = [
    ...new Set(
      map(movie.Screenings, (item) => days[new Date(item.movie_date).getDay()])
    ),
  ];
  let movieTime = [
    ...new Set(
      map(movie.Screenings, (item) =>
        item.movie_starts.split("T")[1].slice(0, 5)
      )
    ),
  ];

  return (
    <TextContainer>
      <MainTitle>Book Tickets</MainTitle>
      <SectionTitle>Select Day</SectionTitle>
      <DaysDiv>
        {map(movieDates, (item) => (
          <DaysButton href=''>{item}</DaysButton>
        ))}
      </DaysDiv>
      <SectionTitle>Book a session</SectionTitle>
      <SessionDiv>
        {map(movieTime, (item) => (
          <SessionButton href=''>{item}</SessionButton>
        ))}
      </SessionDiv>

      <SectionTitle>The Story</SectionTitle>
      <Paragraph>{movie?.Movie?.description}</Paragraph>
      <SectionTitle>Duration</SectionTitle>
      <Paragraph>{movie.Movie?.duration}</Paragraph>
      <SectionTitle>Genre</SectionTitle>
      <Paragraph>{movie.Movie?.genre}</Paragraph>
      <SectionTitle>Release Year</SectionTitle>
      <Paragraph>{movie.Movie?.release_year}</Paragraph>
    </TextContainer>
  );
};

export default MainText;
