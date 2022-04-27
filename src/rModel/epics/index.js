import { combineEpics } from "redux-observable";
import { getMovieEpic } from "../../components/moviePage/epics/getMovieEpic";
import { requestLoginEpic } from "../../components/signInForm/epics/requestLoginEpic";
import { logOutEpic } from "../../layouts/GlobalParts/epics/logoutEpic";
import { getNowShowingEpic } from "../../layouts/homePage/epics/getNowShowingEpic";
import { todayMoviesEpic } from "../../components/moviesOfTheMonth/epics/todayMoviesEpic";
import { moviesByGenreEpic } from "../../components/moviesByGenre/epics/moviesByGenreEpic";

const rootEpic = combineEpics(
  getMovieEpic,
  getNowShowingEpic,
  requestLoginEpic,
  logOutEpic,
  todayMoviesEpic,
  moviesByGenreEpic
);

export default rootEpic;
