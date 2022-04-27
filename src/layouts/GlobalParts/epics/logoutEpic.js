import { ofType } from "redux-observable";
import { actionTypes } from "../../../rModel/actions/actionTypes";
import { from, mergeMap, of } from "rxjs";
import axios from "axios";
import { BASE_URL } from "../../../constants";
import { catchError, map } from "rxjs/operators";
import { setUserLogout } from "../../../rModel/reducers/userReducer/userReducer";
import moment from "moment";
import { setError } from "../../../rModel/reducers/errorReducer/errorReducer";

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
          let time = moment().format("HH:mm:ss");
          return of(setError({ message: error.message, time }));
        })
      )
    )
  );
export { logOutEpic };
