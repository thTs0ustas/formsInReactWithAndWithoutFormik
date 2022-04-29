import { combineEpics } from "redux-observable";
import { addNewMovieEpic } from "./addNewMovieEpic";
import { getAdminMoviesEpic } from "./getAdminMoviesEpic";
import { updateAdminMoviesEpic } from "./updateAdminMoviesEpic";
import { deleteMovieEpic } from "./deleteMovieEpic";

const adminMoviesEpics = combineEpics(
  addNewMovieEpic,
  getAdminMoviesEpic,
  updateAdminMoviesEpic,
  deleteMovieEpic
);
export default adminMoviesEpics;
