import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "../../../../features";

const getAdminMovieAction = createAction(actionTypes.GET_ADMIN_MOVIES);

export default getAdminMovieAction;
