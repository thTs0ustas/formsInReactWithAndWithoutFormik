import { ofType } from "redux-observable";
import axios from "axios";
import { catchError, switchMap } from "rxjs/operators";
import moment from "moment";
import { from, map, of } from "rxjs";
import { reject, sortBy } from "lodash";
import { actionTypes } from "../../../../features/actions/actionTypes";
import { BASE_URL } from "../../../../constants";
import { setError } from "../../../../features";
import { updateAdminScreenings } from "../../../../features/reducers";
import { screeningsData } from "../../movies/helpers/screeningsData";

const updateScreeningEpic = (action$, store$) =>
  action$.pipe(
    ofType(actionTypes.UPDATE_ADMIN_SCREENING),
    switchMap(({ payload }) =>
      from(
        axios.put(
          `${BASE_URL}/admin/${payload.id}/update/screening/${payload.screeningId}`,
          payload.values,
          {
            headers: {
              authorization: `Bearer ${payload.token}`,
            },
          }
        )
      ).pipe(
        map(({ data }) => {
          const time = moment().format("HH:mm");
          if (data.message) return setError({ message: data.message, time });

          const { screenings } = store$.value.admin;
          const updatedScreenings = sortBy(
            [
              ...reject(screenings, (screening) => screening.id === payload.screeningId),
              ...screeningsData(data),
            ],
            (item) => item.id
          );
          return updateAdminScreenings(updatedScreenings);
        }),
        catchError((error) => {
          const time = moment().format("HH:mm");
          return of(setError({ message: error.message, time }));
        })
      )
    )
  );

export { updateScreeningEpic };
