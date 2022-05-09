import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "../../../features/actions/actionTypes";

const getTodayMoviesAction = createAction(actionTypes.GET_TODAY_MOVIES);

export default getTodayMoviesAction;
