import { ofType } from "redux-observable";
import axios from "axios";
import { catchError, switchMap } from "rxjs/operators";
import moment from "moment";
import { from, mergeMap, of } from "rxjs";
import { actionTypes } from "../../../../features/actions/actionTypes";
import { BASE_URL } from "../../../../constants";
import { setError } from "../../../../features";
import { deleteUser } from "../../../../features/reducers";

const deleteAdminUserEpic = (action$, store$) =>
  action$.pipe(
    ofType(actionTypes.DELETE_ADMIN_USER),
    switchMap(({ payload }) => {
      const { id } = store$.value.user;

      if (id === payload.deleteId) {
        const time = moment().format("HH:mm");
        return of(setError({ message: "You can't delete yourself", time }));
      }
      return from(
        axios.delete(`${BASE_URL}/admin/${payload.id}/user/delete/${payload.deleteId}`, {
          headers: {
            authorization: `Bearer ${payload.token}`,
          },
        })
      ).pipe(
        mergeMap(({ data }) => {
          const time = moment().format("HH:mm");

          return [setError({ message: data.message, time }), deleteUser(payload.deleteId)];
        }),
        catchError((error) => {
          const time = moment().format("HH:mm");
          return of(setError({ message: error.message, time }));
        })
      );
    })
  );

export { deleteAdminUserEpic };
