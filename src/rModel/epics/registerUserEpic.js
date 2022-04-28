import { ofType } from "redux-observable";
import { catchError, map, switchMap } from "rxjs/operators";
import { from, of } from "rxjs";
import axios from "axios";
import moment from "moment";
import { BASE_URL } from "../../constants";
import { actionTypes } from "../actions/actionTypes";
import { setError } from "../reducers";
import checkoutAction from "../../components/registrationForm/actions/checkoutAction";

export const registerUserEpic = (action$) =>
  action$.pipe(
    ofType(actionTypes.REGISTER_USER),
    switchMap(({ payload }) =>
      from(axios.post(`${BASE_URL}/users/create/check`, payload)).pipe(
        map(({ data }) => {
          const time = moment().format("HH:mm:ss");
          return data.message ? setError({ message: data.message, time }) : checkoutAction(data);
        }),
        catchError((error) => {
          const time = moment().format("HH:mm:ss");
          return of(setError({ message: error.message, time }));
        })
      )
    )
  );
