import { combineEpics } from "redux-observable";
import { getMovieEpic } from "../../components/moviePage/epics/getMovieEpic";

const rootEpic = combineEpics(getMovieEpic);

export default rootEpic;
