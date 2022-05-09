import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "../../../features/actions/actionTypes";

const getMovieAction = createAction(actionTypes.GET_MOVIE);

export default getMovieAction;
