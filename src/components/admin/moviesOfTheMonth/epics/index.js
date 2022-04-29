import { combineEpics } from "redux-observable";
import { getAdminMoviesOfTheMonthEpic } from "./getAdminMoviesOfTheMonthEpic";
import { getAdminNotShowingMoviesEpic } from "./getAdminNotShowingMoviesEpic";
import { deleteMovieOfTheMonthEpic } from "./deleteMovieOfTheMonthEpic";
import { addNewMovieOfTheMonthEpic } from "./addNewMovieOfTheMonthEpic";

const mOtMEpic = combineEpics(
  getAdminMoviesOfTheMonthEpic,
  getAdminNotShowingMoviesEpic,
  deleteMovieOfTheMonthEpic,
  addNewMovieOfTheMonthEpic
);
export default mOtMEpic;
