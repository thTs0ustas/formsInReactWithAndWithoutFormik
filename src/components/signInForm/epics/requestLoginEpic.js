import { ofType } from "redux-observable";
import { catchError, map, switchMap } from "rxjs/operators";
import { from, of } from "rxjs";
import axios from "axios";
import moment from "moment";
import { BASE_URL } from "../../../constants";
import { actionTypes } from "../../../rModel/actions/actionTypes";
import { setError } from "../../../rModel/reducers/errorReducer/errorReducer";
import { setUser } from "../../../rModel/reducers/userReducer/userReducer";

export const requestLoginEpic = (action$) =>
  action$.pipe(
    ofType(actionTypes.REQUEST_LOGIN),
    switchMap(({ payload }) =>
      from(axios.post(`${BASE_URL}/users/login`, payload)).pipe(
        map(({ data }) => {
          const time = moment().format("HH:mm:ss");
          return data.message ? setError({ message: data.message, time }) : setUser(data);
        }),
        catchError((error) => {
          const time = moment().format("HH:mm:ss");
          return of(setError({ message: error.message, time }));
        })
      )
    )
  );
