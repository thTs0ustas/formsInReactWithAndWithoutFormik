import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "../../../../features";

const getAdminMovieOfTheMonthAction = createAction(actionTypes.GET_ADMIN_MOVIES_OF_THE_MONTH);

export default getAdminMovieOfTheMonthAction;
