import { actionTypes } from "../../../rModel/actions/actionTypes";
import { createAction } from "@reduxjs/toolkit";

const getTodayMoviesAction = createAction(actionTypes.GET_TODAY_MOVIES);

export default getTodayMoviesAction;
