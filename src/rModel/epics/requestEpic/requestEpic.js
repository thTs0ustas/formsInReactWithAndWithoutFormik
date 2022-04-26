import { ajax } from "rxjs/ajax";
import { ofType } from "redux-observable";
import { mergeMap } from "rxjs";
import { catchError, map } from "rxjs/operators";

const requestEpic = (action$) =>
  action$.pipe(
    ofType("REQUEST"),
    mergeMap((action) =>
      ajax.getJSON(action.url).pipe(
        map((data) => ({
          type: "REQUEST_SUCCESS",
          data,
        })),
        catchError((error) => {
          return [
            {
              type: "REQUEST_FAILURE",
              payload: error,
            },
          ];
        })
      )
    )
  );
export default requestEpic;
