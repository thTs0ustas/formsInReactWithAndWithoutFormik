import { actionTypes } from "../../../rModel/actions/actionTypes";
import { createAction } from "@reduxjs/toolkit";

const getMovieAction = createAction(actionTypes.GET_MOVIE);

export default getMovieAction;
