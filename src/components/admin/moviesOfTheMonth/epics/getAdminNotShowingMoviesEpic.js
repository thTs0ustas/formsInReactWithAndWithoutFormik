import { ofType } from "redux-observable";
import { catchError, map } from "rxjs/operators";
import { from, mergeMap, of } from "rxjs";
import axios from "axios";
import moment from "moment";
import { actionTypes } from "../../../../rModel/actions/actionTypes";
import { BASE_URL } from "../../../../constants";
import { setAdminNotPlayingMovies, setError } from "../../../../rModel";

export const getAdminNotShowingMoviesEpic = (action$) =>
  action$.pipe(
    ofType(actionTypes.GET_ADMIN_NOT_SHOWING_MOVIES),
    mergeMap(({ payload }) =>
      from(
        axios.get(`${BASE_URL}/admin/${payload.id}/getMoviesNotPlaying`, {
          headers: {
            authorization: `Bearer ${payload.token}`,
          },
        })
      ).pipe(
        map(({ data }) => {
          const time = moment().format("HH:mm:ss");
          return data.message
            ? setError({ message: data.message, time })
            : setAdminNotPlayingMovies(data);
        }),
        catchError((error) => {
          const time = moment().format("HH:mm:ss");
          return of(setError({ message: error.message, time }));
        })
      )
    )
  );
