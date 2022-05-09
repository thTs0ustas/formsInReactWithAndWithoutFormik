import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "../../../../features/actions/actionTypes";

const updateAdminMovieOfTheMonthAction = createAction(actionTypes.UPDATE_MOVIE_OF_THE_MONTH);

export default updateAdminMovieOfTheMonthAction;
