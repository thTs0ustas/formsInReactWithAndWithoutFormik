import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "../../../../rModel/actions/actionTypes";

const deleteMovieOfTheMonthAction = createAction(actionTypes.DELETE_MOVIE_OF_THE_MONTH);

export default deleteMovieOfTheMonthAction;
