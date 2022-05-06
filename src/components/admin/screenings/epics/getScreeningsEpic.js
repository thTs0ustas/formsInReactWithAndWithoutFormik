import { ofType } from "redux-observable";
import axios from "axios";
import { catchError, map, switchMap } from "rxjs/operators";
import moment from "moment";
import { from, of } from "rxjs";
import { actionTypes } from "../../../../rModel/actions/actionTypes";
import { BASE_URL } from "../../../../constants";
import { setError } from "../../../../rModel";
import { setAdminScreenings } from "../../../../rModel/reducers";
import { screeningsData } from "../../movies/helpers/screeningsData";

const getScreeningsEpic = (action$) =>
  action$.pipe(
    ofType(actionTypes.GET_ADMIN_SCREENING),
    switchMap(({ payload }) =>
      from(
        axios.get(`${BASE_URL}/admin/${payload.id}/getScreenings`, {
          headers: {
            authorization: `Bearer ${payload.token}`,
          },
        })
      ).pipe(
        map(({ data }) => {
          const time = moment().format("HH:mm");
          return data.message
            ? setError({ message: data.message, time })
            : setAdminScreenings(screeningsData(data));
        }),
        catchError((error) => {
          const time = moment().format("HH:mm");
          return of(setError({ message: error.message, time }));
        })
      )
    )
  );

export { getScreeningsEpic };
