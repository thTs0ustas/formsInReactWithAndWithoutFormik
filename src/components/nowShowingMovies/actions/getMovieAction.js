import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "../../../rModel/actions/actionTypes";

const getMovieAction = createAction(actionTypes.GET_MOVIE);

export default getMovieAction;
