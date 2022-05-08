import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "../../../../features/actions/actionTypes";

const updateAdminMovieAction = createAction(actionTypes.UPDATE_MOVIE);

export default updateAdminMovieAction;
