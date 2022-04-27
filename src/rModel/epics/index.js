import { combineEpics } from "redux-observable";
import { getMovieEpic } from "../../components/moviePage/epics/getMovieEpic";
import { getNowShowingEpic } from "../../components/nowShowingMovies/epics/getNowShowingEpic";

const rootEpic = combineEpics(getMovieEpic, getNowShowingEpic);

export default rootEpic;
