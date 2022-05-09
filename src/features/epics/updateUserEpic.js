import { ofType } from "redux-observable";
import { catchError, map, switchMap } from "rxjs/operators";
import { from, of } from "rxjs";
import axios from "axios";
import moment from "moment";
import { BASE_URL } from "../../constants";
import { actionTypes } from "../actions/actionTypes";
import { setError, updateUser } from "../reducers";

export const updateUserEpic = (action$) =>
  action$.pipe(
    ofType(actionTypes.UPDATE_USER),
    switchMap(({ payload: { id, data: values } }) =>
      from(axios.put(`${BASE_URL}/users/update/${id}`, values)).pipe(
        map(({ data }) => {
          const time = moment().format("HH:mm:ss");
          return data.message ? setError({ message: data.message, time }) : updateUser(data);
        }),
        catchError((error) => {
          const time = moment().format("HH:mm:ss");
          return of(setError({ message: error.message, time }));
        })
      )
    )
  );
