import React from "react";
import { map } from "lodash";

import {
  DaysButton,
  DaysDiv,
  MainTitle,
  Paragraph,
  SectionTitle,
  SessionButton,
  SessionDiv,
  TextContainer,
} from "./styledComponents/MainTextStyles";
import { useNavigate } from "react-router-dom";

const MainText = ({ movie, id }) => {
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let movieDates = [
    ...new Set(map(movie?.Screenings, (item) => days[new Date(item.movie_date).getDay()])),
  ];
  let movieTime = [
    ...new Set(map(movie?.Screenings, (item) => item.movie_starts.split("T")[1].slice(0, 5))),
  ];
  const navigate = useNavigate();
  console.log(movie);
  return (
    <TextContainer>
      <MainTitle>Book Tickets</MainTitle>
      <SectionTitle>Select Day</SectionTitle>
      <DaysDiv>
        {map(movieDates, (item) => (
          <DaysButton
            key={item}
            onClick={() =>
              navigate(`/reservation/${id}`, {
                state: `http://localhost:4000${movie.Movie.image}`,
              })
            }
          >
            {item}
          </DaysButton>
        ))}
      </DaysDiv>
      <SectionTitle>Book a session</SectionTitle>
      <SessionDiv>
        {map(movieTime, (item) => (
          <SessionButton
            key={item}
            onClick={() =>
              navigate(`/reservation/${id}`, {
                state: `http://localhost:4000${movie.Movie.image}`,
              })
            }
          >
            {item}
          </SessionButton>
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
