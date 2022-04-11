import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  Container,
  Content,
  MoviePhoto,
  MovieTitle,
  TrailerButton,
} from "./styledComponents/MainPhotoStyles";

const MainPhoto = () => {
  return (
    <Container className='container'>
      <MoviePhoto
        src={require("../../assets/imgs/movie_13.jpg")}
        alt="One Flew Over the Cuckoo's Nest movie photo"
      />
      <Content>
        <MovieTitle>One Flew Over the Cuckoo's Nest</MovieTitle>
        <TrailerButton
          href='https://www.youtube.com/watch?v=OXrcDonY-B8&ab_channel=MovieclipsClassicTrailers'
          target='_blank'
        >
          Watch Trailer
        </TrailerButton>
      </Content>
    </Container>
  );
};

export default MainPhoto;
