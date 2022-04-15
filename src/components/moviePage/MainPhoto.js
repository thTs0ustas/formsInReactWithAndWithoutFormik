import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  Container,
  Content,
  MoviePhoto,
  MovieTitle,
  TrailerButton,
} from "./styledComponents/MainPhotoStyles";
import { useProvider } from "../../model";

const MainPhoto = ({ image, title }) => {
  console.log(image);
  const [{ BASE_URL }] = useProvider(["BASE_URL"]);
  return (
    <Container className='container'>
      <MoviePhoto src={`${BASE_URL}${image}`} alt={title} />
      <Content>
        <MovieTitle>{title}</MovieTitle>
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
