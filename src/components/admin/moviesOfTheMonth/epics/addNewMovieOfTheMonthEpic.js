import { ofType } from "redux-observable";
import { catchError, map, switchMap } from "rxjs/operators";
import { from, of } from "rxjs";
import axios from "axios";
import moment from "moment";

import { BASE_URL } from "../../../../constants";
import { setError } from "../../../../rModel";
import { actionTypes } from "../../../../rModel/actions/actionTypes";
import { updateAdminMovies } from "../../../../rModel/reducers/adminReducer/adminReducer";

export const addNewMovieOfTheMonthEpic = (action$) =>
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
        map(({ data }) => {
          const time = moment().format("HH:mm:ss");
          return data.message ? setError({ message: data.message, time }) : updateAdminMovies(data);
        }),
        catchError((error) => {
          const time = moment().format("HH:mm:ss");
          return of(setError({ message: error.message, time }));
        })
      )
    )
  );
