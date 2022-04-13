import React, {useState, useEffect} from "react";
import {map} from 'lodash'
import axios from 'axios'
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

const MainText = () => {
  const [movie, setMovie] = useState([]);
  const getMovie = () => {
    axios.get("http://localhost:4000/moviesOfTheMonth/1").then((res) => {
      const myMovie = res.data;
      console.log(myMovie)
      setMovie(myMovie);
    });
  };
  useEffect(() => {
    getMovie();
  }, []);

  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let movieDates = [...new Set(map(movie.Screenings, (item) => days[new Date(item.movie_date).getDay()]))]
  let movieTime = [...new Set(map(movie.Screenings, (item) => item.movie_starts.split("T")[1].slice(0, 5)))]

  return (
    <TextContainer>
      <MainTitle>Book Tickets</MainTitle>
      <SectionTitle>Select Day</SectionTitle>
            <DaysDiv>
              {map(movieDates, (item) => 
                  <DaysButton href=''>{item}</DaysButton>
              )}
            </DaysDiv>
            <SectionTitle>Book a session</SectionTitle>
            <SessionDiv>
            {map(movieTime, (item) => 
              <SessionButton href=''>{item}</SessionButton>
            )}
            </SessionDiv>

      <SectionTitle>The Story</SectionTitle>
            <Paragraph>
              {movie?.Movie?.description}
            </Paragraph>
            <SectionTitle>Duration</SectionTitle>
            <Paragraph>{movie.Movie?.duration}</Paragraph>
            <SectionTitle>Genre</SectionTitle>
            <Paragraph>{movie.Movie?.genre}</Paragraph>
            <SectionTitle>Release Year</SectionTitle>
            <Paragraph>1975</Paragraph>

    </TextContainer>
  );
};

export default MainText;

  
