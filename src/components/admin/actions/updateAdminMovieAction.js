import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "../../../rModel/actions/actionTypes";

const updateAdminMovieAction = createAction(actionTypes.UPDATE_MOVIE);

export default updateAdminMovieAction;
