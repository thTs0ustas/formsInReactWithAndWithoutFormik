import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "../../../../rModel/actions/actionTypes";

const updateAdminMovieOfTheMonthAction = createAction(actionTypes.UPDATE_MOVIE_OF_THE_MONTH);

export default updateAdminMovieOfTheMonthAction;
