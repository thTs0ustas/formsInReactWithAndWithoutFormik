import { ofType } from "redux-observable";
import { map, switchMap } from "rxjs/operators";
import { actionTypes } from "../../../rModel/actions/actionTypes";
import { BASE_URL } from "../../../constants";
import { setMovieInfo } from "../../../rModel/reducers/miscReducer/miscReducer";
import { from } from "rxjs";
import axios from "axios";

export const getMovieEpic = (action$) =>
  action$.pipe(
    ofType(actionTypes.GET_MOVIE),
    switchMap(({ payload }) =>
      from(axios.get(`${BASE_URL}/movies/moviepage/${payload}`)).pipe(
        map(({ data }) => setMovieInfo(data))
        //     catchError((err) =>
        //       from(
        //         delay(1000),
        //         setError({ message: err.response.data.message, time: moment().format("h:mm") })
        //       )
        //     )
        //   ),
        // delay(1000),
        // map(() => clearError())
      )
    )
  );
