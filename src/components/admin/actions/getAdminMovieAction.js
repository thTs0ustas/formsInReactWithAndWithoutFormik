import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "../../../rModel/actions/actionTypes";

const getAdminMovieAction = createAction(actionTypes.GET_ADMIN_MOVIES);

export default getAdminMovieAction;
