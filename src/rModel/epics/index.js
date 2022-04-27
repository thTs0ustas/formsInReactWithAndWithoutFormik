import { combineEpics } from "redux-observable";
import { getMovieEpic } from "../../components/moviePage/epics/getMovieEpic";
import { requestLoginEpic } from "../../components/signInForm/epics/requestLoginEpic";
import { logOutEpic } from "../../layouts/GlobalParts/epics/logoutEpic";
import { getNowShowingEpic } from "../../layouts/homePage/epics/getNowShowingEpic";
import { todayMoviesEpic } from "../../components/moviesOfTheMonth/epics/todayMoviesEpic";
import { moviesByGenreEpic } from "../../components/moviesByGenre/epics/moviesByGenreEpic";
import { getUpcomingEpic } from "../../layouts/homePage/epics/getUpcomingEpic";
import { registerUserEpic } from "../../components/registrationForm/epics/registerUserEpic";
import { checkoutEpic } from "../../components/registrationForm/epics/checkoutEpic";
import { createUserEpic } from "../../components/subscription/epics/createUserEpic";

const rootEpic = combineEpics(
  getMovieEpic,
  getNowShowingEpic,
  requestLoginEpic,
  logOutEpic,
  todayMoviesEpic,
  moviesByGenreEpic,
  getUpcomingEpic,
  registerUserEpic,
  checkoutEpic,
  createUserEpic
);

export default rootEpic;
