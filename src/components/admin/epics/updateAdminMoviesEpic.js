import { ofType } from "redux-observable";
import { catchError, map, switchMap } from "rxjs/operators";
import { from, of } from "rxjs";
import axios from "axios";
import moment from "moment";

import { BASE_URL } from "../../../constants";
import { setError } from "../../../rModel";
import { actionTypes } from "../../../rModel/actions/actionTypes";
import { updateAdminIndividualMovie } from "../../../rModel/reducers/adminReducer/adminReducer";

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
        map(({ data }) => {
          const time = moment().format("HH:mm:ss");

          return data.message
            ? setError({ message: data.message, time })
            : updateAdminIndividualMovie(data);
        }),
        catchError((error) => {
          const time = moment().format("HH:mm:ss");
          return of(setError({ message: error.message, time }));
        })
      )
    )
  );
