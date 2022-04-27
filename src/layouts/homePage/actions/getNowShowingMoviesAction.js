import { actionTypes } from "../../../rModel/actions/actionTypes";
import { createAction } from "@reduxjs/toolkit";

const getNowShowingMovies = createAction(actionTypes.GET_NOW_PLAYING);

export default getNowShowingMovies;
