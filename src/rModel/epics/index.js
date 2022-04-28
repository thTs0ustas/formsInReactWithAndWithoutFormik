import { combineEpics } from "redux-observable";
import { getMovieEpic } from "./getMovieEpic";
import { requestLoginEpic } from "./requestLoginEpic";
import { logOutEpic } from "./logoutEpic";
import { getNowShowingEpic } from "./getNowShowingEpic";
import { todayMoviesEpic } from "./todayMoviesEpic";
import { moviesByGenreEpic } from "./moviesByGenreEpic";
import { getUpcomingEpic } from "./getUpcomingEpic";
import { registerUserEpic } from "./registerUserEpic";
import { checkoutEpic } from "./checkoutEpic";
import { createUserEpic } from "./createUserEpic";
import { updateUserEpic } from "./updateUserEpic";
import { getHistoryEpic } from "./getHistoryEpic";
import { getAdminMoviesEpic } from "../../components/admin/epics/getAdminMoviesEpic";
import { addNewMovieEpic } from "../../components/admin/epics/addNewMovieEpic";
import { updateAdminMoviesEpic } from "../../components/admin/epics/updateAdminMoviesEpic";
import { deleteMovieEpic } from "../../components/admin/epics/deleteMovieEpic";

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
  createUserEpic,
  updateUserEpic,
  getHistoryEpic,
  addNewMovieEpic,
  getAdminMoviesEpic,
  updateAdminMoviesEpic,
  deleteMovieEpic
);

export default rootEpic;
