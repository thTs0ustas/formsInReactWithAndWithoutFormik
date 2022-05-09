import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "../../../features/actions/actionTypes";

const getNowShowingMovies = createAction(actionTypes.GET_NOW_PLAYING);

export default getNowShowingMovies;
