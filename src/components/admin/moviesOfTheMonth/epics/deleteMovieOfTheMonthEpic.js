import { ofType } from "redux-observable";
import { catchError, map, switchMap } from "rxjs/operators";
import { from, of } from "rxjs";
import axios from "axios";
import moment from "moment";

import { BASE_URL } from "../../../../constants";
import { setError } from "../../../../rModel";
import { actionTypes } from "../../../../rModel/actions/actionTypes";
import { deleteMovieOfTheMonth } from "../../../../rModel/reducers/adminReducer/adminReducer";

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
        map(({ data }) => {
          const time = moment().format("HH:mm:ss");
          setError({ message: data.message, time });
          return deleteMovieOfTheMonth(payload.movieId);
        }),
        catchError((error) => {
          const time = moment().format("HH:mm:ss");
          return of(setError({ message: error.message, time }));
        })
      )
    )
  );
