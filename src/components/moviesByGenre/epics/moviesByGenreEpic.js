import { ofType } from "redux-observable";
import { catchError, map, switchMap } from "rxjs/operators";
import { actionTypes } from "../../../rModel/actions/actionTypes";
import { BASE_URL } from "../../../constants";
import { from, of } from "rxjs";
import axios from "axios";
import moment from "moment";
import { setError } from "../../../rModel/reducers/errorReducer/errorReducer";
import { getMoviesByGenre } from "../../../rModel/reducers/moviePageReducer/moviePageReducer";

export const moviesByGenreEpic = (action$) =>
  action$.pipe(
    ofType(actionTypes.GET_MOVIES_BY_GENRE),
    switchMap(({ payload }) =>
      from(axios.get(`${BASE_URL}/movies/genre/${payload}`)).pipe(
        map(({ data }) => getMoviesByGenre(data)),
        catchError((error) => {
          let time = moment().format("HH:mm:ss");
          return of(setError({ message: error.message, time }));
        })
      )
    )
  );
