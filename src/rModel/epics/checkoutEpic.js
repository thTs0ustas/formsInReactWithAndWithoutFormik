import { ofType } from "redux-observable";
import { map } from "rxjs/operators";
import { actionTypes } from "../actions/actionTypes";

export const checkoutEpic = (action$) =>
  action$.pipe(
    ofType(actionTypes.CHECKOUT),
    map(({ payload }) => window.location.replace(payload.url))
  );
