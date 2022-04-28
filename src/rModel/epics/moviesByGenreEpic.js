import { ofType } from "redux-observable";
import { catchError, map, switchMap } from "rxjs/operators";
import { from, of } from "rxjs";
import axios from "axios";
import moment from "moment";
import { BASE_URL } from "../../constants";
import { actionTypes } from "../actions/actionTypes";
import { getMoviesByGenre, setError } from "../reducers";

export const moviesByGenreEpic = (action$) =>
  action$.pipe(
    ofType(actionTypes.GET_MOVIES_BY_GENRE),
    switchMap(({ payload }) =>
      from(axios.get(`${BASE_URL}/movies/genre/${payload}`)).pipe(
        map(({ data }) => getMoviesByGenre(data)),
        catchError((error) => {
          const time = moment().format("HH:mm:ss");
          return of(setError({ message: error.message, time }));
        })
      )
    )
  );
