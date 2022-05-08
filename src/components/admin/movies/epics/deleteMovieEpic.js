import { ofType } from "redux-observable";
import { catchError, map, switchMap } from "rxjs/operators";
import { from, of } from "rxjs";
import axios from "axios";
import moment from "moment";

import { BASE_URL } from "../../../../constants";
import { deleteMovie, setError } from "../../../../features";
import { actionTypes } from "../../../../features/actions/actionTypes";

export const deleteMovieEpic = (action$) =>
  action$.pipe(
    ofType(actionTypes.DELETE_MOVIE),
    switchMap(({ payload }) =>
      from(
        axios.delete(`${BASE_URL}/admin/${payload.id}/delete/movie/${payload.movieId}`, {
          headers: {
            authorization: `Bearer ${payload.token}`,
          },
        })
      ).pipe(
        map(({ data }) => {
          const time = moment().format("HH:mm:ss");
          return data.message
            ? setError({ message: data.message, time })
            : deleteMovie(payload.movieId);
        }),
        catchError((error) => {
          const time = moment().format("HH:mm:ss");
          return of(setError({ message: error.message, time }));
        })
      )
    )
  );
