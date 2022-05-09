import { ofType } from "redux-observable";
import { catchError, map, switchMap } from "rxjs/operators";
import { from, of } from "rxjs";
import axios from "axios";
import moment from "moment";

import { BASE_URL } from "../../../../constants";
import { setAdminMoviesOfTheMonth, setError } from "../../../../features";
import { actionTypes } from "../../../../features/actions/actionTypes";

export const getAdminMoviesOfTheMonthEpic = (action$) =>
  action$.pipe(
    ofType(actionTypes.GET_ADMIN_MOVIES_OF_THE_MONTH),
    switchMap(({ payload }) =>
      from(
        axios.get(`${BASE_URL}/admin/${payload.id}/getMoviesOfTheMonth`, {
          headers: {
            authorization: `Bearer ${payload.token}`,
          },
        })
      ).pipe(
        map(({ data }) => {
          const time = moment().format("HH:mm:ss");
          return data.message
            ? setError({ message: data.message, time })
            : setAdminMoviesOfTheMonth(data);
        }),
        catchError((error) => {
          const time = moment().format("HH:mm:ss");
          return of(setError({ message: error.message, time }));
        })
      )
    )
  );
