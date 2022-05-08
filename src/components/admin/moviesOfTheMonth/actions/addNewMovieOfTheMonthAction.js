import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "../../../../features/actions/actionTypes";

const addNewMovieOfTheMonthAction = createAction(actionTypes.ADD_NEW_MOVIE_OF_THE_MONTH);

export default addNewMovieOfTheMonthAction;
