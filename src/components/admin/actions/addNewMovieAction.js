import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "../../../rModel/actions/actionTypes";

const addNewMovieAction = createAction(actionTypes.ADD_NEW_MOVIE);

export default addNewMovieAction;
