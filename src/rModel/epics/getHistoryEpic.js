import { ofType } from "redux-observable";
import { catchError, map, switchMap } from "rxjs/operators";
import { from, of } from "rxjs";
import axios from "axios";
import moment from "moment";
import { BASE_URL } from "../../constants";
import { actionTypes } from "../actions/actionTypes";
import { setError } from "../reducers/errorReducer/errorReducer";
import { setHistory } from "../reducers/userReducer/userReducer";

export const getHistoryEpic = (action$) =>
  action$.pipe(
    ofType(actionTypes.GET_HISTORY),
    switchMap(({ payload }) =>
      from(axios.get(`${BASE_URL}/reservations/history/${payload}`)).pipe(
        map(({ data }) => {
          const time = moment().format("HH:mm:ss");
          if (data.message) return setError({ message: data.message, time });
          return setHistory(data);
        }),
        catchError((error) => {
          const time = moment().format("HH:mm:ss");
          return of(setError({ message: error.message, time }));
        })
      )
    )
  );
