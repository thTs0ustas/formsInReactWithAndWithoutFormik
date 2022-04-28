import React from "react";
import { useParams } from "react-router-dom";
import { Header, Nav, NavDiv, SignUpBar } from "../../theme";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/NavBar";
import { SignupBarPart } from "../GlobalParts/SignupBarPart";
import { TitleHeader } from "../../components/moviesOfTheMonth/styledComponents/styles";
import { Switch } from "../../components";
import { MoviesByGenre } from "../../components/moviesByGenre/MoviesByGenre";

function MoviesByGenreLayout() {
  const { genre } = useParams();
  return (
    <>
      <Header>
        <SignUpBar>
          <Switch />
          <div>
            <SignupBarPart />
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
}
export { MoviesByGenreLayout };
