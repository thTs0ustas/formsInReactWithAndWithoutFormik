import { ofType } from "redux-observable";
import { catchError, map, switchMap } from "rxjs/operators";
import { from, of } from "rxjs";
import axios from "axios";
import moment from "moment";
import { BASE_URL } from "../../../constants";
import { setError, setUser } from "../../../features";
import { actionTypes } from "../../../features/actions/actionTypes";

export const addGuestEpic = (action$) =>
  action$.pipe(
    ofType(actionTypes.ADD_GUEST_USER),
    switchMap(({ payload }) =>
      from(axios.post(`${BASE_URL}/users/guest`, payload)).pipe(
        map(({ data }) => {
          const time = moment().format("HH:mm");
          return data.message
            ? setError({ message: data.message, time })
            : setUser({
                id: data.id,
                username: data.username,
                token: data.accessToken,
                isMember: data.isMember,
                isAdmin: data.isAdmin,
                email: data.email,
                first_name: data.first_name,
                last_name: data.last_name,
              });
        }),
        catchError((error) => {
          const time = moment().format("HH:mm");
          return of(setError({ message: error.message, time }));
        })
      )
    )
  );
