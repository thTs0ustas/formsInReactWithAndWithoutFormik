import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "../../../../features/actions/actionTypes";

const getNotShowingMoviesAction = createAction(actionTypes.GET_ADMIN_NOT_SHOWING_MOVIES);

export default getNotShowingMoviesAction;
