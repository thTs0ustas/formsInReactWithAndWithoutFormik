import { ofType } from "redux-observable";
import axios from "axios";
import { catchError, mergeMap, switchMap } from "rxjs/operators";
import moment from "moment";
import { from, of } from "rxjs";
import { actionTypes } from "../../../../features/actions/actionTypes";
import { BASE_URL } from "../../../../constants";
import { setError } from "../../../../features";
import { addAdminScreening } from "../../../../features/reducers";
import { screeningsData } from "../../movies/helpers/screeningsData";

const addAdminScreeningsEpic = (action$) =>
  action$.pipe(
    ofType(actionTypes.ADD_ADMIN_SCREENING),
    switchMap(({ payload }) =>
      from(
        axios.post(`${BASE_URL}/admin/${payload.id}/screening/create`, payload.values, {
          headers: {
            authorization: `Bearer ${payload.token}`,
          },
        })
      ).pipe(
        mergeMap(({ data }) => {
          const time = moment().format("HH:mm");

          return data.message
            ? setError({ message: data.message, time })
            : [
                addAdminScreening(...screeningsData(data)),
                setError({ message: "Screening added", time }),
              ];
        }),
        catchError((error) => {
          const time = moment().format("HH:mm");
          return of(setError({ message: error.message, time }));
        })
      )
    )
  );

export { addAdminScreeningsEpic };
