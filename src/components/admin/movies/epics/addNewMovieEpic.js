import { ofType } from "redux-observable";
import { catchError, switchMap } from "rxjs/operators";
import { from, mergeMap, of } from "rxjs";
import axios from "axios";
import moment from "moment";

import { BASE_URL } from "../../../../constants";
import { setError } from "../../../../features";
import { actionTypes } from "../../../../features/actions/actionTypes";
import { updateAdminMovies } from "../../../../features/reducers/adminReducer/adminReducer";

export const addNewMovieEpic = (action$) =>
  action$.pipe(
    ofType(actionTypes.ADD_NEW_MOVIE),
    switchMap(({ payload }) =>
      from(
        axios.post(
          `${BASE_URL}/admin/${payload.id}/movie/create`,
          { values: payload.values },
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
            : [updateAdminMovies(data), setError({ message: "Movie added", time })];
        }),
        catchError((error) => {
          const time = moment().format("HH:mm");
          return of(setError({ message: error.message, time }));
        })
      )
    )
  );
