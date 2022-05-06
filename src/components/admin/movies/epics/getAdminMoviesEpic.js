import { ofType } from "redux-observable";
import { catchError, map, switchMap } from "rxjs/operators";
import { from, of } from "rxjs";
import axios from "axios";
import moment from "moment";

import { BASE_URL } from "../../../../constants";
import { setAdminMovies, setError } from "../../../../rModel";
import { actionTypes } from "../../../../rModel/actions/actionTypes";

export const getAdminMoviesEpic = (action$) =>
  action$.pipe(
    ofType(actionTypes.GET_ADMIN_MOVIES),
    switchMap(({ payload }) =>
      from(
        axios.get(`${BASE_URL}/admin/${payload.id}/getMovies`, {
          headers: {
            authorization: `Bearer ${payload.token}`,
          },
        })
      ).pipe(
        map(({ data }) => {
          const time = moment().format("HH:mm:ss");
          return data.message ? setError({ message: data.message, time }) : setAdminMovies(data);
        }),
        catchError((error) => {
          const time = moment().format("HH:mm:ss");
          return of(setError({ message: error.message, time }));
        })
      )
    )
  );
