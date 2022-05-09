import { ofType } from "redux-observable";
import { catchError, switchMap } from "rxjs/operators";
import { from, mergeMap, of } from "rxjs";
import axios from "axios";
import moment from "moment";

import { BASE_URL } from "../../../../constants";
import { setError } from "../../../../features";
import { actionTypes } from "../../../../features/actions/actionTypes";
import { updateAdminIndividualMovie } from "../../../../features/reducers/adminReducer/adminReducer";

export const updateAdminMoviesEpic = (action$) =>
  action$.pipe(
    ofType(actionTypes.UPDATE_MOVIE),
    switchMap(({ payload }) =>
      from(
        axios.put(
          `${BASE_URL}/admin/${payload.id}/update/movie/${payload.movieId}`,
          payload.values,
          {
            headers: {
              authorization: `Bearer ${payload.token}`,
            },
          }
        )
      ).pipe(
        mergeMap(({ data }) => {
          const time = moment().format("HH:mm");

          return data.message
            ? setError({ message: data.message, time })
            : [updateAdminIndividualMovie(data), setError({ message: "Movie updated", time })];
        }),
        catchError((error) => {
          const time = moment().format("HH:mm");
          return of(setError({ message: error.message, time }));
        })
      )
    )
  );
