import { ofType } from "redux-observable";
import axios from "axios";
import { catchError, switchMap } from "rxjs/operators";
import moment from "moment";
import { from, mergeMap, of } from "rxjs";
import { actionTypes } from "../../../../rModel/actions/actionTypes";
import { BASE_URL } from "../../../../constants";
import { setError } from "../../../../rModel";
import { deleteScreening } from "../../../../rModel/reducers";

const deleteAdminScreeningEpic = (action$) =>
  action$.pipe(
    ofType(actionTypes.DELETE_ADMIN_SCREENING),
    switchMap(({ payload }) =>
      from(
        axios.delete(`${BASE_URL}/admin/${payload.id}/screening/delete/${payload.deleteId}`, {
          headers: {
            authorization: `Bearer ${payload.token}`,
          },
        })
      ).pipe(
        mergeMap(({ data }) => {
          const time = moment().format("HH:mm");

          return [setError({ message: data.message, time }), deleteScreening(payload.deleteId)];
        }),
        catchError((error) => {
          const time = moment().format("HH:mm");
          return of(setError({ message: error.message, time }));
        })
      )
    )
  );

export { deleteAdminScreeningEpic };
