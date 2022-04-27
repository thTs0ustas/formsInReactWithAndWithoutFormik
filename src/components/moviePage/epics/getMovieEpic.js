import { ofType } from "redux-observable";
import { catchError, map, switchMap } from "rxjs/operators";
import { actionTypes } from "../../../rModel/actions/actionTypes";
import { BASE_URL } from "../../../constants";
import { setMovieInfo } from "../../../rModel/reducers/miscReducer/miscReducer";
import { from, of } from "rxjs";
import axios from "axios";
import moment from "moment";
import { setError } from "../../../rModel/reducers/errorReducer/errorReducer";

export const getMovieEpic = (action$) =>
  action$.pipe(
    ofType(actionTypes.GET_MOVIE),
    switchMap(({ payload }) =>
      from(axios.get(`${BASE_URL}/movies/moviepage/${payload}`)).pipe(
        map(({ data }) => setMovieInfo(data)),
        catchError((error) => {
          let time = moment().format("HH:mm:ss");
          return of(setError({ message: error.message, time }));
        })
      )
    )
  );
