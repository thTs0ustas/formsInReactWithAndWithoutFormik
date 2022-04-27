import { combineEpics } from "redux-observable";
import { getMovieEpic } from "../../components/moviePage/epics/getMovieEpic";
import { getNowShowingEpic } from "../../components/nowShowingMovies/epics/getNowShowingEpic";
import { requestLoginEpic } from "../../components/signInForm/epics/requestLoginEpic";
import { logOutEpic } from "../../layouts/GlobalParts/epics/logoutEpic";

const rootEpic = combineEpics(getMovieEpic, getNowShowingEpic, requestLoginEpic, logOutEpic);

export default rootEpic;
