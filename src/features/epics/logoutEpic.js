import { ofType } from "redux-observable";
import { from, mergeMap, of } from "rxjs";
import axios from "axios";
import { catchError, map } from "rxjs/operators";
import moment from "moment";
import { BASE_URL } from "../../constants";
import { setError, setUserLogout } from "../reducers";
import { actionTypes } from "../actions/actionTypes";

const logOutEpic = (action$) =>
  action$.pipe(
    ofType(actionTypes.LOGOUT),
    mergeMap(({ payload }) =>
      from(
        axios.post(
          `${BASE_URL}/users/logout`,
          { id: payload.id },
          {
            headers: { authorization: `Bearer ${payload.token}` },
          }
        )
      ).pipe(
        map(() => setUserLogout()),
        catchError((error) => {
          const time = moment().format("HH:mm:ss");
          return of(setError({ message: error.message, time }));
        })
      )
    )
  );
export { logOutEpic };
