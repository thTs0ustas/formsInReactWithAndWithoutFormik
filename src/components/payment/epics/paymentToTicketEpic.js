import { ofType } from "redux-observable";
import { catchError, map, switchMap } from "rxjs/operators";
import { from, of } from "rxjs";
import axios from "axios";
import moment from "moment";

import { BASE_URL } from "../../../constants";
import { setError, setResponse } from "../../../features";
import { actionTypes } from "../../../features/actions/actionTypes";

export const paymentToTicketEpic = (action$) =>
  action$.pipe(
    ofType(actionTypes.PAYMENT_TO_TICKET_ACTION),
    switchMap(({ payload }) =>
      from(
        axios.post(
          `${BASE_URL}/reservations/users/${payload.id}/new`,
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
          return data.message ? setError({ message: data.message, time }) : setResponse(data);
        }),
        catchError((error) => {
          const time = moment().format("HH:mm");
          return of(setError({ message: error.message, time }));
        })
      )
    )
  );
