import { combineEpics } from "redux-observable";
import { getAdminMoviesOfTheMonthEpic } from "./getAdminMoviesOfTheMonthEpic";
import { getAdminNotShowingMoviesEpic } from "./getAdminNotShowingMoviesEpic";

const mOtMEpic = combineEpics(getAdminMoviesOfTheMonthEpic, getAdminNotShowingMoviesEpic);
export default mOtMEpic;
