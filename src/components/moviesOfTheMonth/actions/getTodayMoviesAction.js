import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "../../../rModel/actions/actionTypes";

const getTodayMoviesAction = createAction(actionTypes.GET_TODAY_MOVIES);

export default getTodayMoviesAction;
