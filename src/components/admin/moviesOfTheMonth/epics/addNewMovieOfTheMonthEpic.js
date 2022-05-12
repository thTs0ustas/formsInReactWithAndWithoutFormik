import { ofType } from "redux-observable";
import { catchError, map, switchMap } from "rxjs/operators";
import { from, of } from "rxjs";
import axios from "axios";
import moment from "moment";

import { BASE_URL } from "../../../../constants";
import { actionTypes, setError } from "../../../../features";
import getAdminMovieOfTheMonthAction from "../actions/getAdminMovieOfTheMonthAction";

export const addNewMovieOfTheMonthEpic = (action$) =>
  action$.pipe(
    ofType(actionTypes.ADD_NEW_MOVIE_OF_THE_MONTH),
    switchMap(({ payload }) =>
      from(
        axios.post(
          `${BASE_URL}/admin/${payload.id}/movieOfTheMonth/create`,
          { values: payload.movie_id },
          {
            headers: {
              authorization: `Bearer ${payload.token}`,
            },
          }
        )
      ).pipe(
        map(({ data }) => {
          const time = moment().format("HH:mm:ss");
          return data.message
            ? setError({ message: data.message, time })
            : getAdminMovieOfTheMonthAction({
                id: payload.id,
                token: payload.token,
              });
        }),
        catchError((error) => {
          const time = moment().format("HH:mm:ss");
          return of(setError({ message: error.message, time }));
        })
      )
    )
  );
