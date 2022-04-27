import { Header, Nav, NavDiv, SignUpBar } from "../../theme";
import React from "react";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/NavBar";
import { SignupBarPart } from "../GlobalParts/SignupBarPart";
import { TitleHeader } from "../../components/moviesOfTheMonth/styledComponents/styles";
import { Switch } from "../../components";
import { MoviesByGenre } from "../../components/moviesByGenre/MoviesByGenre";
import { useParams } from "react-router-dom";

const MoviesByGenreLayout = ({ username }) => {
  const { genre } = useParams();
  return (
    <>
      <Header>
        <SignUpBar>
          <Switch />
          <div>
            <SignupBarPart username={username} />
          </div>
        </SignUpBar>
        <NavDiv>
          <Nav>
            <NavBar />
          </Nav>
        </NavDiv>
      </Header>
      <TitleHeader>
        <h2>
          <span>{genre.toUpperCase()} MOVIES</span>
        </h2>
      </TitleHeader>

      <MoviesByGenre genre={genre} />

      <Footer />
    </>
  );
};
export { MoviesByGenreLayout };
