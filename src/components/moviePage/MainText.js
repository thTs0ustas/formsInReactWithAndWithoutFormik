import React from "react";
import { isEmpty, map, sortBy } from "lodash";

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
import { selectors, useProvider } from "../../model";

const MainText = ({ movie, id }) => {
  const [{ BASE_URL }] = useProvider([selectors.url]);
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let movieDates = [
    ...new Set(map(movie?.screenings, (item) => days[new Date(item.movie_date).getDay()])),
  ];
  let movieTime = [
    ...new Set(
      sortBy(map(movie?.screenings, (item) => item.movie_starts.split("T")[1].slice(0, 5)))
    ),
  ];
  const navigate = useNavigate();
  return (
    <TextContainer>
      {isEmpty(movieDates) || (
        <>
          <MainTitle> Book Tickets</MainTitle>
          <SectionTitle>Select Day</SectionTitle>
          <DaysDiv>
            {map(movieDates, (item) => (
              <DaysButton
                key={item}
                onClick={() =>
                  navigate(`/reservation/${id}`, {
                    state: `${BASE_URL}${movie.movie.image}`,
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
                    state: `${BASE_URL}${movie.movie.image}`,
                  })
                }
              >
                {item}
              </SessionButton>
            ))}
          </SessionDiv>
        </>
      )}
      <br />
      <br />
      <SectionTitle>The Story</SectionTitle>
      <Paragraph>{movie?.movie?.description}</Paragraph>
      <SectionTitle>Duration</SectionTitle>
      <Paragraph>{movie.movie?.duration}</Paragraph>
      <SectionTitle>Genre</SectionTitle>
      <Paragraph>{movie.movie?.genre.replace(/^\w/, (w) => w.toUpperCase())}</Paragraph>
      <SectionTitle>Release Year</SectionTitle>
      <Paragraph>{movie.movie?.release_year}</Paragraph>
    </TextContainer>
  );
};

export default MainText;
