import { ofType } from "redux-observable";
import { catchError, map, switchMap } from "rxjs/operators";
import { from, of } from "rxjs";
import axios from "axios";
import moment from "moment";
import { BASE_URL } from "../../../constants";
import { actionTypes } from "../../../rModel/actions/actionTypes";
import { setError } from "../../../rModel/reducers/errorReducer/errorReducer";

export const createUserEpic = (action$) =>
  action$.pipe(
    ofType(actionTypes.CREATE_USER),
    switchMap(() => {
      const values = JSON.parse(window.sessionStorage.getItem("values"));
      return from(axios.post(`${BASE_URL}/users/create`, values)).pipe(
        map(({ data }) => {
          window.sessionStorage.removeItem("values");
          const time = moment().format("HH:mm:ss");
          return data.message && setError({ message: data.message, time });
        }),
        catchError((error) => {
          const time = moment().format("HH:mm:ss");
          return of(setError({ message: error.message, time }));
        })
      );
    })
  );
