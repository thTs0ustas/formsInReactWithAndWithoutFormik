import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "../../../../features";

const updateAdminMovieAction = createAction(actionTypes.UPDATE_MOVIE);

export default updateAdminMovieAction;
