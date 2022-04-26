import React from "react";
import { isEmpty, map } from "lodash";

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
import { BASE_URL } from "../../constants";
import { movieDates, movieTime } from "./helpers/dateAndTimes";

const MainText = ({ movie, screenings, id }) => {
  const navigate = useNavigate();
  return (
    <TextContainer>
      {isEmpty(movieDates(screenings)) || (
        <>
          <MainTitle> Book Tickets</MainTitle>
          <SectionTitle>Select Day</SectionTitle>
          <DaysDiv>
            {map(movieDates(screenings), (item) => (
              <DaysButton
                key={item}
                onClick={() =>
                  navigate(`/reservation/${id}`, {
                    state: `${BASE_URL}${movie.image}`,
                  })
                }
              >
                {item}
              </DaysButton>
            ))}
          </DaysDiv>
          <SectionTitle>Book a session</SectionTitle>
          <SessionDiv>
            {map(movieTime(screenings), (item) => (
              <SessionButton
                key={item}
                onClick={() =>
                  navigate(`/reservation/${id}`, {
                    state: `${BASE_URL}${movie.image}`,
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
      <Paragraph>{movie?.description}</Paragraph>
      <SectionTitle>Duration</SectionTitle>
      <Paragraph>{movie?.duration}</Paragraph>
      <SectionTitle>Genre</SectionTitle>
      <Paragraph>{movie?.genre}</Paragraph>
      <SectionTitle>Release Year</SectionTitle>
      <Paragraph>{movie?.release_year}</Paragraph>
    </TextContainer>
  );
};

export default MainText;
