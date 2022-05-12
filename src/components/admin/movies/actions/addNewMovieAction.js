import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "../../../../features";

const addNewMovieAction = createAction(actionTypes.ADD_NEW_MOVIE);

export default addNewMovieAction;
