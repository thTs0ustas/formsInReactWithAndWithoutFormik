import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "../../../../rModel/actions/actionTypes";

const getNotShowingMoviesAction = createAction(actionTypes.GET_ADMIN_NOT_SHOWING_MOVIES);

export default getNotShowingMoviesAction;
