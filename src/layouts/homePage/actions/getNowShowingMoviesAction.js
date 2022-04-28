import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "../../../rModel/actions/actionTypes";

const getNowShowingMovies = createAction(actionTypes.GET_NOW_PLAYING);

export default getNowShowingMovies;
