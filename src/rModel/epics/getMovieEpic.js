import { ofType } from "redux-observable";
import { catchError, map, switchMap } from "rxjs/operators";
import { from, of } from "rxjs";
import axios from "axios";
import moment from "moment";
import { actionTypes } from "../actions/actionTypes";
import { BASE_URL } from "../../constants";
import { setMovieInfo } from "../reducers/moviePageReducer/moviePageReducer";
import { setError } from "../reducers/errorReducer/errorReducer";

export const getMovieEpic = (action$, state$) =>
  action$.pipe(
    ofType(actionTypes.GET_MOVIE),
    switchMap(({ payload }) =>
      from(axios.get(`${BASE_URL}/movies/moviepage/${payload}`)).pipe(
        map(({ data }) => setMovieInfo(data)),
        catchError((error) => {
          const time = moment().format("HH:mm:ss");
          return of(setError({ message: error.message, time }));
        })
      )
    )
  );
