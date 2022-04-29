import { combineEpics } from "redux-observable";
import { getAdminMoviesOfTheMonthEpic } from "./getAdminMoviesOfTheMonthEpic";

const mOtMEpic = combineEpics(getAdminMoviesOfTheMonthEpic);
export default mOtMEpic;
