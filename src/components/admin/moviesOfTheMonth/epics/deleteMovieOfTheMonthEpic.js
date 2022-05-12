import { ofType } from "redux-observable";
import { catchError, mergeMap, switchMap } from "rxjs/operators";
import { from, of } from "rxjs";
import axios from "axios";
import moment from "moment";

import { BASE_URL } from "../../../../constants";
import { actionTypes, setError } from "../../../../features";
import { deleteMovieOfTheMonth } from "../../../../features/reducers/adminReducer/adminReducer";

export const deleteMovieOfTheMonthEpic = (action$) =>
  action$.pipe(
    ofType(actionTypes.DELETE_MOVIE_OF_THE_MONTH),
    switchMap(({ payload }) =>
      from(
        axios.delete(`${BASE_URL}/admin/${payload.id}/movieOfTheMonth/delete/${payload.movieId}`, {
          headers: {
            authorization: `Bearer ${payload.token}`,
          },
        })
      ).pipe(
        mergeMap(({ data }) => {
          const time = moment().format("HH:mm");
          setError({ message: data.message, time });

          return [
            deleteMovieOfTheMonth(payload.movieId),
            setError({ message: "Movie deleted", time }),
          ];
        }),
        catchError((error) => {
          const time = moment().format("HH:mm");
          return of(setError({ message: error.message, time }));
        })
      )
    )
  );
