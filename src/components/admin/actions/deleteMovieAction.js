import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "../../../rModel/actions/actionTypes";

const deleteMovieAction = createAction(actionTypes.DELETE_MOVIE);

export default deleteMovieAction;
