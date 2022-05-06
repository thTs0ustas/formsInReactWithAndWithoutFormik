import { ofType } from "redux-observable";
import axios from "axios";
import { catchError, switchMap } from "rxjs/operators";
import moment from "moment";
import { from, map, of } from "rxjs";
import { reject } from "lodash";
import { actionTypes } from "../../../../rModel/actions/actionTypes";
import { BASE_URL } from "../../../../constants";
import { setError } from "../../../../rModel";
import { updateAdminUsers } from "../../../../rModel/reducers";

const updateUserEpic = (action$, store$) =>
  action$.pipe(
    ofType(actionTypes.UPDATE_ADMIN_USERS),
    switchMap(({ payload }) =>
      from(
        axios.put(`${BASE_URL}/admin/${payload.id}/update/user/${payload.userId}`, payload.values, {
          headers: {
            authorization: `Bearer ${payload.token}`,
          },
        })
      ).pipe(
        map(({ data }) => {
          const time = moment().format("HH:mm");
          if (data.message) return setError({ message: data.message, time });

          const { users } = store$.value.admin;
          const updatedUsers = [...reject(users, (user) => user.id === payload.userId), data];

          return updateAdminUsers(updatedUsers);
        }),
        catchError((error) => {
          const time = moment().format("HH:mm");
          return of(setError({ message: error.message, time }));
        })
      )
    )
  );

export { updateUserEpic };
