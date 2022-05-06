import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "../../../../rModel/actions/actionTypes";

const getAdminMovieOfTheMonthAction = createAction(actionTypes.GET_ADMIN_MOVIES_OF_THE_MONTH);

export default getAdminMovieOfTheMonthAction;
