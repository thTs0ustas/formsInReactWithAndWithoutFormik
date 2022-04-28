import { ofType } from "redux-observable";
import { catchError, map, switchMap } from "rxjs/operators";
import { from, of } from "rxjs";
import axios from "axios";
import moment from "moment";
import { BASE_URL } from "../../constants";
import { actionTypes } from "../actions/actionTypes";
import { setError } from "../reducers/errorReducer/errorReducer";
import { getTodayMovies } from "../reducers/moviePageReducer/moviePageReducer";

export const todayMoviesEpic = (action$) =>
  action$.pipe(
    ofType(actionTypes.GET_TODAY_MOVIES),
    switchMap(() =>
      from(axios.get(`${BASE_URL}/moviesOfTheMonth/homepageLayout`)).pipe(
        map(({ data }) => getTodayMovies(data)),
        catchError((error) => {
          const time = moment().format("HH:mm:ss");
          return of(setError({ message: error.message, time }));
        })
      )
    )
  );
