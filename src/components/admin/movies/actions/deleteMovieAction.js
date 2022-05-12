import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "../../../../features";

const deleteMovieAction = createAction(actionTypes.DELETE_MOVIE);

export default deleteMovieAction;
