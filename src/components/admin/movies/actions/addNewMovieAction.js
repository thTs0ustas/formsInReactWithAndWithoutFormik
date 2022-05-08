import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "../../../../features/actions/actionTypes";

const addNewMovieAction = createAction(actionTypes.ADD_NEW_MOVIE);

export default addNewMovieAction;
