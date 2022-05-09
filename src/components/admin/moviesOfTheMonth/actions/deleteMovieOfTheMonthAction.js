import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "../../../../features/actions/actionTypes";

const deleteMovieOfTheMonthAction = createAction(actionTypes.DELETE_MOVIE_OF_THE_MONTH);

export default deleteMovieOfTheMonthAction;
