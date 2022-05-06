import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import PropTypes from "prop-types";
import {
  Container,
  Content,
  MoviePhoto,
  MovieTitle,
  TrailerButton,
} from "./styledComponents/MainPhotoStyles";
import movieTheaterImage from "../../assets/imgs/movie-theater.jpg";
import { BASE_URL } from "../../constants";

function MainPhoto({ image, title }) {
  return (
    <Container className='container'>
      <MoviePhoto src={image ? `${BASE_URL}${image}` : movieTheaterImage} alt={title} />
      <Content>
        <MovieTitle>{title}</MovieTitle>
        <TrailerButton href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank'>
          Watch Trailer
        </TrailerButton>
      </Content>
    </Container>
  );
}
MainPhoto.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default MainPhoto;
