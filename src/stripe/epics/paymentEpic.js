import { ofType } from "redux-observable";
import { catchError, map, switchMap } from "rxjs/operators";
import { from, of } from "rxjs";
import axios from "axios";
import moment from "moment";

import { BASE_URL } from "../../constants";
import { setError } from "../../features";
import { actionTypes } from "../../features/actions/actionTypes";

export const paymentEpic = (action$) =>
  action$.pipe(
    ofType(actionTypes.PAYMENT_ACTION),
    switchMap(({ payload }) =>
      from(
        axios.post(
          `${BASE_URL}/payments/user/${payload.id}/create-checkout`,
          {
            data: payload.data,
          },
          {
            headers: {
              authorization: `Bearer ${payload.token}`,
            },
          }
        )
      ).pipe(
        map(({ data }) => {
          const time = moment().format("HH:mm");
          return data.message
            ? setError({ message: data.message, time })
            : window.location.replace(data.url);
        }),
        catchError((error) => {
          const time = moment().format("HH:mm");
          return of(setError({ message: error.message, time }));
        })
      )
    )
  );
