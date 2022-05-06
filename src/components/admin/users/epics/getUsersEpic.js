import { ofType } from "redux-observable";
import axios from "axios";
import { catchError, map, switchMap } from "rxjs/operators";
import moment from "moment";
import { from, of } from "rxjs";
import { actionTypes } from "../../../../rModel/actions/actionTypes";
import { BASE_URL } from "../../../../constants";
import { setAdminUsers, setError } from "../../../../rModel";

const getUsersEpic = (action$) =>
  action$.pipe(
    ofType(actionTypes.GET_ADMIN_USERS),
    switchMap(({ payload }) =>
      from(
        axios.get(`${BASE_URL}/admin/${payload.id}/getUsers`, {
          headers: {
            authorization: `Bearer ${payload.token}`,
          },
        })
      ).pipe(
        map(({ data }) => {
          const time = moment().format("HH:mm");
          return data.message ? setError({ message: data.message, time }) : setAdminUsers(data);
        }),
        catchError((error) => {
          const time = moment().format("HH:mm");
          return of(setError({ message: error.message, time }));
        })
      )
    )
  );

export { getUsersEpic };
