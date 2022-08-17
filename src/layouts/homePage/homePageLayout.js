import { Col, Row } from "react-bootstrap";

import {
  Archive,
  Features,
  HomeDiv,
  Promos,
  Typography,
  VideoWallDiv,
} from "./styledComponents/styles";

import { Header, SignUpBar } from "../../theme";

import { CardComponent, MoviesOfTheMonth, PromoCards, Switch, TitleHeader } from "../../components";
import Footer from "../../components/footer/Footer";
import CarouselHero from "../../components/HeroSlider";
import NavBar from "../../components/NavBar";
import { SignupBarPart } from "../GlobalParts/SignupBarPart";
import { useNowShowingMovies } from "./hooks/useNowShowingMovies";

function HomePageLayout() {
  const genres = [
    "action",
    "adventure",
    "animation",
    "comedy",
    "crime",
    "drama",
    "horror",
    "mystery",
    "sci-fi",
    "thriller",
    "war",
    "western",
  ];
  useNowShowingMovies();
  return (
    <HomeDiv>
      <Header mainPage={false}>
        <SignUpBar>
          <Switch />
          <div>
            <SignupBarPart />
          </div>
        </SignUpBar>
        <VideoWallDiv>
          <NavBar />
          <CarouselHero />
        </VideoWallDiv>
      </Header>
      <div>
        <Features>
          <MoviesOfTheMonth />
          <Promos>
            <PromoCards />
          </Promos>
          <br />
          <Typography>
            <TitleHeader>
              <h2>
                <span>MOVIE LIBRARY</span>
              </h2>

              <p>Arranged By Genre</p>
            </TitleHeader>
          </Typography>
          <Archive>
            <Row>
              {genres.map((genre) => (
                <Col sm={6} key={genre}>
                  <CardComponent genre={genre} />
                </Col>
              ))}
            </Row>
          </Archive>
        </Features>
      </div>
      <Footer />
    </HomeDiv>
  );
}

export { HomePageLayout };
