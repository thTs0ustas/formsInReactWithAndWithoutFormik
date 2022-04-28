import { ofType } from "redux-observable";
import { catchError, map, switchMap } from "rxjs/operators";
import { from, of } from "rxjs";
import axios from "axios";
import moment from "moment";
import { BASE_URL } from "../../../constants";
import { actionTypes } from "../../../rModel/actions/actionTypes";
import { setError } from "../../../rModel/reducers/errorReducer/errorReducer";
import { getUpcomingMovies } from "../../../rModel/reducers/moviePageReducer/moviePageReducer";

export const getUpcomingEpic = (action$) =>
  action$.pipe(
    ofType(actionTypes.GET_UPCOMING_MOVIES),
    switchMap(() =>
      from(axios.get(`${BASE_URL}/moviesOfTheMonth/upcoming`)).pipe(
        map(({ data }) => getUpcomingMovies(data)),
        catchError((error) => {
          const time = moment().format("HH:mm:ss");
          return of(setError({ message: error.message, time }));
        })
      )
    )
  );
